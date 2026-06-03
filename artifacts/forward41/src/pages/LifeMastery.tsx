import { motion } from "framer-motion";
import { ChevronRight, ChevronDown, Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollWidgets from "../components/ScrollWidgets";
import lifeMasteryImg from "../assets/life-mastery-program.png";
import treeImg from "@assets/4_1778774206980.png";
import logoImg from "../assets/logo.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const faqs = [
  {
    q: "Is this one-on-one coaching?",
    a: "No. Life Mastery is a self-paced online coaching program. You work through the content in your own time, at your own pace. Optional one-on-one support with me may be available separately.",
  },
  {
    q: "How long do I have access?",
    a: "You receive lifetime access to the program. Once you're in, you can revisit any module, worksheet, or exercise whenever you need it — now or years from now.",
  },
  {
    q: "How much time do I need each week?",
    a: "Most people dedicate 1–2 hours per week to the program. Each module is designed to be practical and focused, not overwhelming. You can move faster or slower depending on what works for you.",
  },
  {
    q: "Is this suitable if I'm new to personal development?",
    a: "Absolutely. The program is designed to meet you where you are. Whether this is your first step into personal growth or you've been on this journey for years, Life Mastery offers depth and practical tools for every stage.",
  },
  {
    q: "Do I need to complete it in 8 weeks?",
    a: "Not at all. The 8 modules are structured to build on each other, but you set the pace. Some people move through it in 6 weeks, others take 12. What matters is that you complete it in a way that works for your life.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. We offer a 30-day money-back guarantee. If the program isn't the right fit for you, reach out within 30 days of purchase and we'll issue a full refund — no questions asked.",
  },
  {
    q: "Can I add private coaching support?",
    a: "Yes. Optional one-on-one coaching sessions with me can be added on top of the program if you'd like personalized guidance alongside the self-paced content. Reach out to inquire.",
  },
];

const modules = [
  { num: "01", title: "Get Clear", desc: "Begin with a complete picture of where you are. Identify what's working, what isn't, and what you actually want — without judgement." },
  { num: "02", title: "Know What Matters", desc: "Reconnect with your core values and define what a meaningful life looks like for you, so your goals feel genuinely worth pursuing." },
  { num: "03", title: "Break Limiting Patterns", desc: "Identify the beliefs and behaviors that keep you stuck, and begin replacing them with perspectives that move you forward." },
  { num: "04", title: "Build Confidence", desc: "Develop a stable, grounded sense of self-belief — one that doesn't rely on external validation or perfect circumstances." },
  { num: "05", title: "Take Aligned Action", desc: "Learn how to set goals that are emotionally connected to your values and break them down into steps you'll actually follow through on." },
  { num: "06", title: "Strengthen Your Habits", desc: "Build the daily routines and rituals that support your energy, wellbeing, and forward momentum — without forcing willpower." },
  { num: "07", title: "Move Through Resistance", desc: "Learn why resistance shows up, what it's telling you, and how to move through fear, procrastination, and self-doubt with steadiness." },
  { num: "08", title: "Create Your Forward Plan", desc: "Bring everything together into a personalized life plan — a clear, actionable framework you can return to long after the program ends." },
];

const included = [
  { title: "Self-Paced Online Program", desc: "8 structured modules you can work through on your own schedule, from anywhere in the world." },
  { title: "Guided Coaching Exercises", desc: "Practical exercises drawn from real coaching frameworks — designed to create genuine insight and forward movement." },
  { title: "Reflection Tools", desc: "Thoughtful prompts that help you think more deeply, gain clarity, and reconnect with what matters most." },
  { title: "Short Teaching Videos", desc: "Concise, focused video content that introduces each concept and coaching tool clearly." },
  { title: "Downloadable Worksheets", desc: "Beautifully designed worksheets to guide your work through each module and capture your insights." },
  { title: "Flexible, Lifetime Access", desc: "Complete the program at your own pace, and return to any module or resource whenever you need it." },
];

export default function LifeMastery() {
  const [, setLocation] = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getAccess = () => {
    setLocation("/");
    setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="min-h-screen text-foreground font-sans bg-background">
      <ScrollWidgets />
      <Nav />

      {/* Hero */}
      <section className="pt-20 relative overflow-hidden bg-[#2f3e46] text-white">
        <div
          className="hidden md:block absolute pointer-events-none select-none"
          style={{ right: "-6%", bottom: "-10%", width: "42%" }}
        >
          <img src={treeImg} alt="" aria-hidden="true" className="w-full h-auto object-contain opacity-[0.13]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 text-center space-y-8">
          <motion.div className="space-y-6" initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Life Mastery Coaching Program</p>
            <p className="font-serif text-xl italic text-white/70">Break Free. Break Through. Become.<span className="not-italic" style={{fontSize:"0.75em", verticalAlign:"text-top", lineHeight:1}}>™</span></p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-white">
              A self-paced program for clarity, confidence, and forward movement
            </h1>
            <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
              Practical tools, guided exercises, and reflective coaching to help you gain clarity, shift limiting patterns, and move forward with confidence — at your own pace.
            </p>
            <div className="pt-4">
              <button
                className="bg-white text-[#2f3e46] px-12 py-4 rounded-sm text-lg font-bold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                onClick={getAccess}
              >
                Get Access <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Visual + Intro */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            className="md:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-[#2f3e46] rounded-sm overflow-hidden shadow-xl">
              <img src={lifeMasteryImg} alt="Life Mastery Coaching Program" className="w-full object-contain" />
            </div>
          </motion.div>
          <motion.div
            className="md:w-3/5 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-sm font-bold tracking-widest text-primary uppercase">What This Program Gives You</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Practical tools to help you reconnect, rebuild, and move forward
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Life Mastery is a self-paced online coaching program that gives you the structure, exercises, and reflective tools to do meaningful inner work — on your own terms, in your own time.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              You'll work through 8 focused modules, each designed to help you gain deeper self-awareness, break through what's been holding you back, and take clear, aligned steps toward the life you want.
            </p>
            <button
              className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              onClick={getAccess}
            >
              Get Access <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-muted">
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="space-y-4">
            <p className="text-sm font-bold tracking-widest text-primary uppercase">This Program Is For You If</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              If You Feel Stuck, Uncertain, Or Disconnected From The Life You Want
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "You feel stuck in the same patterns and aren't sure how to break free",
              "You struggle with self-doubt and find it hard to trust yourself",
              "You lack clarity about what you want or which direction to take",
              "You find yourself procrastinating on the goals that matter most",
              "You feel overwhelmed by change and unsure how to navigate it",
              "You want more confidence, purpose, and a genuine sense of direction",
            ].map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 bg-white border border-border p-5 rounded-sm"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Transformation */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase">What You'll Build</p>
          <h2 className="font-serif text-4xl md:text-5xl">What Life Mastery helps you build</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { title: "Clarity & Direction", desc: "Know exactly where you are, where you want to go, and how to get there." },
            { title: "Confidence & Self-Belief", desc: "Build a grounded sense of self-worth that isn't dependent on external approval." },
            { title: "Resilience & Steadiness", desc: "Develop the emotional tools to navigate difficulty without losing momentum." },
            { title: "Practical Goal-Setting", desc: "Set goals that are deeply connected to your values — not just what you think you should want." },
            { title: "Aligned Action", desc: "Stop overthinking and start taking steps that actually move your life forward." },
            { title: "Stronger Boundaries", desc: "Learn to protect your time, energy, and wellbeing with clarity and confidence." },
            { title: "Renewed Purpose", desc: "Reconnect with what makes you come alive and let that guide your daily decisions." },
            { title: "A Plan That Lasts", desc: "Walk away with a personalized life plan you can return to again and again." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="space-y-3 p-6 border border-border rounded-sm bg-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div className="w-8 h-px bg-primary" />
              <h3 className="font-serif text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-[#2f3e46] text-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Everything Inside</p>
            <h2 className="font-serif text-4xl md:text-5xl">What you'll receive</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {included.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4 items-start bg-white/5 border border-white/10 p-6 rounded-sm"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modules */}
      <section className="py-24 px-6 bg-[#f9f7f4]">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase">The Program</p>
          <h2 className="font-serif text-4xl md:text-5xl">Inside the Program</h2>
          <p className="text-muted-foreground text-lg">8 focused modules, each building on the last.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              className="flex gap-5 items-start bg-white border border-border p-6 rounded-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <p className="font-serif text-4xl text-primary/20 font-bold leading-none flex-shrink-0">{m.num}</p>
              <div>
                <h3 className="font-serif text-xl mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-xl mx-auto text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase">Investment</p>
          <h2 className="font-serif text-4xl md:text-5xl">Get access to Life Mastery</h2>
          <div className="border border-border rounded-sm p-10 space-y-6 bg-white shadow-sm">
            <p className="font-serif text-7xl text-primary">$197</p>
            <p className="text-muted-foreground text-sm">Instant access. Complete the program at your own pace.</p>
            <ul className="text-left space-y-3 pt-2">
              {[
                "8 self-paced coaching modules",
                "Guided exercises & reflection tools",
                "Downloadable worksheets",
                "Short teaching videos",
                "Lifetime access to all materials",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="w-full bg-primary text-primary-foreground py-4 rounded-sm text-lg font-medium hover:bg-primary/90 transition-colors"
              onClick={getAccess}
            >
              Get Access
            </button>
          </div>
        </motion.div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-6 bg-muted">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
          <h2 className="font-serif text-3xl md:text-4xl">30-Day Money-Back Guarantee</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Try the program for 30 days. If it isn't the right fit, reach out and we'll refund your investment in full — no questions asked. Your growth matters more to us than your money.
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl">Questions you might have</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-border rounded-sm overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/50 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-serif text-lg pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-primary text-primary-foreground text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">Ready to move forward?</h2>
          <p className="text-xl opacity-80 leading-relaxed max-w-2xl mx-auto">
            Life Mastery gives you the tools and structure to stop circling the same patterns and begin creating clearer, more confident forward movement.
          </p>
          <button
            className="bg-white text-primary px-12 py-4 rounded-sm text-lg font-bold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            onClick={getAccess}
          >
            Get Access <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
