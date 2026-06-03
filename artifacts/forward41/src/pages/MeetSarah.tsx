import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollWidgets from "../components/ScrollWidgets";
import sarahImg from "@assets/img1778926366379_1780427260602.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const approachCards = [
  {
    label: "Reflect",
    body: "Create space to pause, think clearly, and understand what is really going on beneath the surface.",
  },
  {
    label: "Reframe",
    body: "Identify the beliefs, patterns, and choices that may be keeping you stuck.",
  },
  {
    label: "Rebuild",
    body: "Take practical, intentional steps toward clarity, confidence, and forward movement.",
  },
];

const expectations = [
  "Supportive, honest conversations",
  "Practical reflection, not surface-level motivation",
  "Space to untangle what feels stuck",
  "Tools and action steps you can apply in real life",
  "A calm, structured approach to personal growth",
];

export default function MeetSarah() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <ScrollWidgets />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-28 pb-0 px-6 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            className="space-y-7 pb-16 md:pb-24"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="text-xs font-bold tracking-widest text-primary uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Forward 41
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground"
            >
              Meet Sarah
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground text-lg leading-relaxed max-w-md"
            >
              Founder of Forward 41 and coach helping people move through stuckness,
              self-doubt, and transition with clarity, confidence, and purpose.
            </motion.p>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground text-base leading-relaxed max-w-md"
            >
              Forward 41 was created for people who are ready to pause, reflect, and begin
              moving forward with more intention. My work is about helping you see what feels
              stuck, understand the patterns shaping your current season, and take clearer
              steps toward the life you are ready to build.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Link
                href="/pathways"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-bold tracking-wide hover:bg-primary/90 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                View Coaching Pathways <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-foreground/25 text-foreground px-6 py-3 rounded-sm text-sm font-bold tracking-wide hover:border-foreground/50 hover:bg-foreground/5 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Book a Call <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "12px 12px 80px 12px",
                width: "min(420px, 100%)",
                aspectRatio: "3 / 4",
              }}
            >
              <img
                src={sarahImg}
                alt="Sarah — Founder of Forward 41"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 18%" }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f5f2ee" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="text-xs font-bold tracking-widest text-primary uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Story
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl leading-tight text-foreground"
            >
              Why Forward 41 Exists
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="space-y-5 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                Forward 41 was created from a simple belief: change becomes possible when
                people are given the space, support, and structure to see themselves clearly
                and take the next step forward.
              </p>
              <p>
                I know how powerful it can be to pause, reflect, and begin again with
                intention. My work is about helping people move through stuckness,
                self-doubt, transition, and uncertainty so they can reconnect with who they
                are, what matters to them, and the life they are ready to build.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Approach cards ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="space-y-4 max-w-xl">
              <motion.p
                variants={fadeIn}
                className="text-xs font-bold tracking-widest text-primary uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Approach
              </motion.p>
              <motion.h2
                variants={fadeIn}
                className="font-serif text-4xl md:text-5xl leading-tight text-foreground"
              >
                My Approach
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {approachCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  variants={fadeIn}
                  custom={i}
                  className="p-8 rounded-sm space-y-4"
                  style={{ backgroundColor: "#f5f2ee" }}
                >
                  <p
                    className="text-xs font-bold tracking-widest text-primary uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    0{i + 1}
                  </p>
                  <h3 className="font-serif text-2xl text-foreground">{card.label}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What to Expect ───────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#EDEDE9" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="text-xs font-bold tracking-widest text-primary uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              What to Expect
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl leading-tight text-foreground"
            >
              What It Feels Like to Work With Me
            </motion.h2>
          </motion.div>

          <motion.ul
            className="space-y-5 pt-2 md:pt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {expectations.map((item) => (
              <motion.li
                key={item}
                variants={fadeIn}
                className="flex items-start gap-4 text-muted-foreground text-lg leading-relaxed"
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#52796F" }}
                />
                {item}
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </section>

      {/* ── Background ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="text-xs font-bold tracking-widest text-primary uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Background
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl leading-tight text-foreground"
            >
              A Thoughtful, Structured Way Forward
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              With a background in psychology, coaching, and personal development, I bring a
              thoughtful and structured approach to helping people grow with clarity and
              confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 text-white" style={{ backgroundColor: "#2F3E46" }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl leading-tight"
            >
              Ready to Move Forward?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-white/70 text-lg leading-relaxed max-w-lg mx-auto"
            >
              Explore the Forward 41 coaching pathways or book a call to find the right
              starting point for you.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            >
              <Link
                href="/pathways"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#354F52] px-6 py-3 rounded-sm text-sm font-bold tracking-wide hover:bg-white/90 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                View Coaching Pathways <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-sm text-sm font-bold tracking-wide hover:border-white/70 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Book a Call <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
