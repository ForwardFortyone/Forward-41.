import { useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export const SECTIONS = [
  { id: "hero",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "mission",  label: "Mission" },
  { id: "services", label: "Services" },
  { id: "contact",  label: "Contact" },
];

interface NeuralNavProps {
  activeSection: string;
}

function PulseRing() {
  return (
    <>
      <motion.span
        className="absolute rounded-full border border-primary/60"
        style={{ inset: -6 }}
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{ opacity: 0, scale: 2.2 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="absolute rounded-full border border-primary/40"
        style={{ inset: -3 }}
        initial={{ opacity: 0.6, scale: 1 }}
        animate={{ opacity: 0, scale: 1.8 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
      />
    </>
  );
}

function Dendrite({ side, delay }: { side: "left" | "right"; delay: number }) {
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2"
      style={{ [side === "left" ? "right" : "left"]: "calc(100% + 2px)" }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 10, opacity: 0.45 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <div className="h-[1.5px] bg-primary w-full" />
    </motion.div>
  );
}

export default function NeuralNav({ activeSection }: NeuralNavProps) {
  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center select-none">
      {SECTIONS.map((section, i) => {
        const isActive = section.id === activeSection;
        const isPast   = i < activeIndex;
        const isFuture = i > activeIndex;

        return (
          <div key={section.id} className="flex flex-col items-center">
            {/* Connector line between nodes */}
            {i > 0 && (
              <div className="relative w-[1.5px] h-9 bg-foreground/10 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-primary"
                  initial={false}
                  animate={{ height: isPast || isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
                {/* Travelling spark on active connector */}
                {isActive && (
                  <motion.div
                    className="absolute left-0 w-full rounded-full bg-white/80"
                    style={{ height: 4 }}
                    initial={{ top: "0%", opacity: 1 }}
                    animate={{ top: "100%", opacity: 0 }}
                    transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </div>
            )}

            {/* Node */}
            <button
              aria-label={`Scroll to ${section.label}`}
              data-testid={`neural-nav-${section.id}`}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative flex items-center justify-center cursor-pointer group"
              style={{ width: 20, height: 20 }}
            >
              {/* Dendrite arms on active node */}
              <AnimatePresence>
                {isActive && (
                  <>
                    <Dendrite side="left" delay={0.05} />
                    <Dendrite side="right" delay={0.1} />
                  </>
                )}
              </AnimatePresence>

              {/* Pulse rings */}
              <AnimatePresence>{isActive && <PulseRing />}</AnimatePresence>

              {/* Core dot */}
              <motion.div
                className="rounded-full"
                animate={{
                  width:            isActive ? 10 : isPast ? 7 : 5,
                  height:           isActive ? 10 : isPast ? 7 : 5,
                  backgroundColor:  isActive
                    ? "hsl(165 19% 40%)"
                    : isPast
                    ? "hsl(165 19% 55%)"
                    : "hsl(0 0% 75%)",
                  boxShadow: isActive
                    ? "0 0 10px 3px hsla(165,19%,40%,0.55)"
                    : "none",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Hover label */}
              <span className="pointer-events-none absolute right-7 whitespace-nowrap text-xs font-medium text-foreground/70 bg-background/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {section.label}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
