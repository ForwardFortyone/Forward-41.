import { useEffect, useRef } from "react";

/* ── palette ── */
const C_TEAL = "82,121,111";
const C_DARK = "47,62,70";
const C_BG   = "#faf8f5";

/* ── tuning ── */
const DESKTOP_NODES   = 75;
const MOBILE_NODES    = 30;
const MAX_DIST_FRAC   = 0.22;   // max connection length as fraction of min(W,H)
const MAX_CONN        = 5;      // max connections per node
const PULSE_TARGET_D  = 8;      // simultaneous pulses on desktop
const PULSE_TARGET_M  = 3;
const CHAIN_PROB      = 0.60;   // chance a pulse spawns a new one on arrival
const DRIFT_SPEED     = 1.2e-5; // base drift (fraction of screen / ms)
const ACTIVATION_DUR  = 1.6;    // seconds a node stays "lit" after being hit
const CONN_GLOW_DUR   = 1.2;    // seconds a connection stays highlighted

/* ── types ── */
interface NNode {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  baseAlpha: number;
  phase: number; phaseSpeed: number;
  lastActivated: number;   // timestamp (s)
}

interface Conn {
  i: number; j: number;
  cx: number; cy: number;  // bezier control point (absolute, recomputed each frame)
  cpfx: number; cpfy: number; // control point as offsets from midpoint (fractions of W,H)
  lastPulseTime: number;
  lastPulseDir: 0 | 1;
}

interface Pulse {
  connIdx: number;
  dir: 0 | 1;   // 0 = i→j, 1 = j→i
  progress: number;
  speed: number;
  alpha: number;
}

/* ── Poisson-ish placement: jittered grid with random offset ── */
function generateNodes(count: number, seed: number): NNode[] {
  const nodes: NNode[] = [];
  const cols = Math.ceil(Math.sqrt(count * 1.4));
  const rows = Math.ceil(count / cols);
  const cx = 1 / cols;
  const cy = 1 / rows;

  // seeded pseudo-random
  let s = seed;
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };

  for (let r = 0; r < rows && nodes.length < count; r++) {
    for (let c = 0; c < cols && nodes.length < count; c++) {
      const x = (c + 0.15 + rng() * 0.70) * cx;
      const y = (r + 0.15 + rng() * 0.70) * cy;
      // skip nodes that land too close to edges
      if (x < 0.02 || x > 0.98 || y < 0.02 || y > 0.98) continue;
      const angle = rng() * Math.PI * 2;
      const speed = DRIFT_SPEED * (0.4 + rng() * 0.8);
      nodes.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 2.5 + rng() * 3.5,
        baseAlpha: 0.08 + rng() * 0.12,
        phase: rng() * Math.PI * 2,
        phaseSpeed: 0.5 + rng() * 0.8,
        lastActivated: -999,
      });
    }
  }
  return nodes;
}

/* ── build connections: each node connects to ≤ MAX_CONN nearest neighbours ── */
function buildConns(nodes: NNode[], maxDistFrac: number): Conn[] {
  const conns: Conn[] = [];
  const existing = new Set<string>();
  const connCount = new Array(nodes.length).fill(0);

  // For each node, find candidates within distance, sorted by distance
  for (let i = 0; i < nodes.length; i++) {
    if (connCount[i] >= MAX_CONN) continue;
    type Cand = { j: number; d: number };
    const cands: Cand[] = [];
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < maxDistFrac) cands.push({ j, d });
    }
    cands.sort((a, b) => a.d - b.d);

    for (const { j } of cands) {
      if (connCount[i] >= MAX_CONN || connCount[j] >= MAX_CONN) continue;
      const key = `${i}-${j}`;
      if (existing.has(key)) continue;
      existing.add(key);
      connCount[i]++;
      connCount[j]++;

      // Small random bezier offset so axons look organic
      const seed = (i * 7919 + j * 104729) & 0xffff;
      const rng2 = (n: number) => ((seed * n * 1664525 + 1013904223) & 0xffffffff) / 0xffffffff;
      const ox = (rng2(1) - 0.5) * 0.04;  // control point offset fraction
      const oy = (rng2(2) - 0.5) * 0.04;

      conns.push({ i, j, cx: 0, cy: 0, cpfx: ox, cpfy: oy, lastPulseTime: -999, lastPulseDir: 0 });
    }
  }
  return conns;
}

/* ── quadratic bezier point ── */
function qBez(x1: number, y1: number, cx: number, cy: number, x2: number, y2: number, t: number): [number, number] {
  const it = 1 - t;
  return [
    it * it * x1 + 2 * it * t * cx + t * t * x2,
    it * it * y1 + 2 * it * t * cy + t * t * y2,
  ];
}

/* ── draw partial quadratic bezier (0→progress) ── */
function drawQBez(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number, cx: number, cy: number, x2: number, y2: number,
  progress: number, steps = 20
) {
  const maxStep = Math.max(1, Math.round(progress * steps));
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  for (let k = 1; k <= maxStep; k++) {
    const [px, py] = qBez(x1, y1, cx, cy, x2, y2, k / steps);
    ctx.lineTo(px, py);
  }
  ctx.stroke();
}

/* ── component ── */
export default function NeuralBackground() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const rafRef     = useRef(0);
  const stateRef   = useRef<{
    nodes: NNode[];
    conns: Conn[];
    pulses: Pulse[];
    adjList: number[][];  // conn indices per node
    initiated: boolean;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const isMobile = () => window.innerWidth < 768;

    /* ── init / resize ── */
    const init = () => {
      const count = isMobile() ? MOBILE_NODES : DESKTOP_NODES;
      const nodes = generateNodes(count, 42);
      const conns = buildConns(nodes, MAX_DIST_FRAC);

      // adjacency list: for each node, which conn indices touch it
      const adjList: number[][] = nodes.map(() => []);
      conns.forEach((c, ci) => {
        adjList[c.i].push(ci);
        adjList[c.j].push(ci);
      });

      // seed a few pulses
      const pulseTarget = isMobile() ? PULSE_TARGET_M : PULSE_TARGET_D;
      const pulses: Pulse[] = [];
      for (let k = 0; k < Math.min(pulseTarget, conns.length); k++) {
        const idx = Math.floor((k / pulseTarget) * conns.length);
        pulses.push({
          connIdx: idx,
          dir: (Math.random() > 0.5 ? 0 : 1) as 0 | 1,
          progress: Math.random(),
          speed: 0.12 + Math.random() * 0.12,
          alpha: 0.5 + Math.random() * 0.3,
        });
      }

      stateRef.current = { nodes, conns, pulses, adjList, initiated: false };
    };

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    /* ── main render loop ── */
    let prevT = 0;
    const draw = (ts: number) => {
      rafRef.current = requestAnimationFrame(draw);
      const t  = ts * 0.001;
      const dt = Math.min(t - prevT, 0.05);
      prevT = t;
      const state = stateRef.current;
      if (!state) return;
      const { nodes, conns, adjList } = state;
      const W = canvas.width;
      const H = canvas.height;
      const mobile = isMobile();
      const pulseTarget = mobile ? PULSE_TARGET_M : PULSE_TARGET_D;

      /* 1. clear */
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = C_BG;
      ctx.fillRect(0, 0, W, H);

      /* 2. drift nodes */
      const maxDist = MAX_DIST_FRAC * Math.min(W, H) / Math.min(W, H); // still 0-1
      for (const n of nodes) {
        n.x += n.vx * dt * 1000;
        n.y += n.vy * dt * 1000;
        // soft boundary bounce
        if (n.x < 0.03 || n.x > 0.97) n.vx *= -1;
        if (n.y < 0.03 || n.y > 0.97) n.vy *= -1;
        n.x = Math.max(0.03, Math.min(0.97, n.x));
        n.y = Math.max(0.03, Math.min(0.97, n.y));
        // slow random walk of velocity
        n.vx += (Math.random() - 0.5) * DRIFT_SPEED * 0.08;
        n.vy += (Math.random() - 0.5) * DRIFT_SPEED * 0.08;
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        const maxS = DRIFT_SPEED * 2;
        if (speed > maxS) { n.vx = (n.vx / speed) * maxS; n.vy = (n.vy / speed) * maxS; }
      }

      /* 3. update bezier control points (they follow nodes) */
      for (const c of conns) {
        const na = nodes[c.i], nb = nodes[c.j];
        const mx = (na.x + nb.x) * 0.5 * W;
        const my = (na.y + nb.y) * 0.5 * H;
        c.cx = mx + c.cpfx * W;
        c.cy = my + c.cpfy * H;
      }

      /* 4. draw connections */
      for (let ci = 0; ci < conns.length; ci++) {
        const c = conns[ci];
        const na = nodes[c.i], nb = nodes[c.j];
        const x1 = na.x * W, y1 = na.y * H;
        const x2 = nb.x * W, y2 = nb.y * H;

        const sinceGlow = t - c.lastPulseTime;
        const glowFrac  = sinceGlow < CONN_GLOW_DUR
          ? Math.pow(1 - sinceGlow / CONN_GLOW_DUR, 1.5)
          : 0;

        const baseAlpha = 0.10 + glowFrac * 0.22;

        // glow pass (desktop only)
        if (!mobile && glowFrac > 0.05) {
          ctx.save();
          ctx.filter = `blur(3px)`;
          ctx.strokeStyle = `rgba(${C_TEAL},${glowFrac * 0.18})`;
          ctx.lineWidth = 3.5;
          ctx.lineCap = "round";
          drawQBez(ctx, x1, y1, c.cx, c.cy, x2, y2, 1);
          ctx.restore();
        }

        // crisp axon line
        ctx.strokeStyle = `rgba(${C_TEAL},${baseAlpha})`;
        ctx.lineWidth   = 0.8 + glowFrac * 0.6;
        ctx.lineCap     = "round";
        drawQBez(ctx, x1, y1, c.cx, c.cy, x2, y2, 1);
      }

      /* 5. draw nodes */
      for (const n of nodes) {
        const x = n.x * W, y = n.y * H;
        const sinceActivated = t - n.lastActivated;
        const activeFrac = sinceActivated < ACTIVATION_DUR
          ? Math.pow(1 - sinceActivated / ACTIVATION_DUR, 1.2)
          : 0;

        const pulse = 1 + 0.07 * Math.sin(t * n.phaseSpeed + n.phase);
        const r = n.r * pulse;
        const a = n.baseAlpha + activeFrac * 0.30;

        // activation ring
        if (activeFrac > 0.05) {
          const ringR = r * (1.5 + activeFrac * 2.5);
          ctx.beginPath();
          ctx.arc(x, y, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${C_TEAL},${activeFrac * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // halo
        const halo = ctx.createRadialGradient(x, y, 0, x, y, r * 4.5);
        halo.addColorStop(0,   `rgba(${C_TEAL},${a * 0.45})`);
        halo.addColorStop(0.5, `rgba(${C_TEAL},${a * 0.12})`);
        halo.addColorStop(1,   `rgba(${C_TEAL},0)`);
        ctx.beginPath();
        ctx.arc(x, y, r * 4.5, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // soma (cell body): dark ring outline
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${C_DARK},${a * 0.55})`;
        ctx.lineWidth   = 0.7;
        ctx.stroke();

        // soma fill
        const soma = ctx.createRadialGradient(x, y, 0, x, y, r);
        soma.addColorStop(0,   `rgba(255,255,255,${a * 0.80 + activeFrac * 0.15})`);
        soma.addColorStop(0.5, `rgba(${C_TEAL},${a * 0.70})`);
        soma.addColorStop(1,   `rgba(${C_DARK},${a * 0.35})`);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = soma;
        ctx.fill();

        // nucleolus (tiny bright center dot) on larger nodes
        if (n.r > 4.5) {
          const nucR = r * 0.28;
          ctx.beginPath();
          ctx.arc(x, y, nucR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${a * 0.7})`;
          ctx.fill();
        }
      }

      /* 6. advance & draw pulses */
      const surviving: Pulse[] = [];
      for (const pulse of state.pulses) {
        pulse.progress += pulse.speed * dt;

        if (pulse.progress >= 1) {
          // pulse arrived — activate destination node
          const c = conns[pulse.connIdx];
          if (c) {
            const destIdx = pulse.dir === 0 ? c.j : c.i;
            nodes[destIdx].lastActivated = t;

            // chain reaction: spawn new pulse on a connected arc
            if (Math.random() < CHAIN_PROB) {
              const adj = adjList[destIdx];
              const options = adj.filter(ci => ci !== pulse.connIdx);
              if (options.length > 0) {
                const nextConn = options[Math.floor(Math.random() * options.length)];
                const nc = conns[nextConn];
                const newDir: 0 | 1 = nc.i === destIdx ? 0 : 1;
                surviving.push({
                  connIdx: nextConn,
                  dir: newDir,
                  progress: 0,
                  speed: 0.10 + Math.random() * 0.14,
                  alpha: 0.45 + Math.random() * 0.35,
                });
                conns[nextConn].lastPulseTime = t;
                conns[nextConn].lastPulseDir  = newDir;
              }
            }
          }
          continue;  // don't keep this pulse
        }

        surviving.push(pulse);

        // draw the pulse
        const c = conns[pulse.connIdx];
        if (!c) continue;
        const na = nodes[c.i], nb = nodes[c.j];
        const x1 = na.x * W, y1 = na.y * H;
        const x2 = nb.x * W, y2 = nb.y * H;

        const [px, py] = pulse.dir === 0
          ? qBez(x1, y1, c.cx, c.cy, x2, y2, pulse.progress)
          : qBez(x2, y2, c.cx, c.cy, x1, y1, pulse.progress);

        const pr = pulse.progress;
        const fade = pr < 0.12 ? pr / 0.12 : pr > 0.88 ? (1 - pr) / 0.12 : 1;
        const a = pulse.alpha * fade;

        // outer glow
        const gr = mobile ? 10 : 16;
        const grd = ctx.createRadialGradient(px, py, 0, px, py, gr);
        grd.addColorStop(0,   `rgba(255,255,255,${a * 0.90})`);
        grd.addColorStop(0.25,`rgba(${C_TEAL},${a * 0.65})`);
        grd.addColorStop(0.65,`rgba(${C_TEAL},${a * 0.18})`);
        grd.addColorStop(1,   `rgba(${C_TEAL},0)`);
        ctx.beginPath();
        ctx.arc(px, py, gr, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // bright core
        const cr = mobile ? 2 : 3;
        ctx.beginPath();
        ctx.arc(px, py, cr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a * 0.95})`;
        ctx.fill();

        // faint tail
        if (!mobile) {
          const tailT = Math.max(0, pulse.progress - 0.08);
          const [tx, ty] = pulse.dir === 0
            ? qBez(x1, y1, c.cx, c.cy, x2, y2, tailT)
            : qBez(x2, y2, c.cx, c.cy, x1, y1, tailT);

          const tailGrd = ctx.createLinearGradient(tx, ty, px, py);
          tailGrd.addColorStop(0, `rgba(${C_TEAL},0)`);
          tailGrd.addColorStop(1, `rgba(${C_TEAL},${a * 0.35})`);
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.strokeStyle = tailGrd;
          ctx.lineWidth = 1.5;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }
      state.pulses = surviving;

      /* 7. maintain pulse count — spontaneous firing */
      const deficit = pulseTarget - state.pulses.length;
      for (let k = 0; k < deficit; k++) {
        if (conns.length === 0) break;
        const ci = Math.floor(Math.random() * conns.length);
        const dir: 0 | 1 = Math.random() > 0.5 ? 0 : 1;
        state.pulses.push({
          connIdx: ci, dir, progress: 0,
          speed: 0.10 + Math.random() * 0.14,
          alpha: 0.40 + Math.random() * 0.30,
        });
        conns[ci].lastPulseTime = t;
        conns[ci].lastPulseDir  = dir;
      }
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        -1,
        pointerEvents: "none",
        display:       "block",
      }}
    />
  );
}
