import { motion } from "framer-motion";
import { ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollWidgets from "../components/ScrollWidgets";
import treeImg from "@assets/4_1778774206980.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const testimonials = [
  {
    quote: "Working with Sarah has been a game-changer. Her coaching style is empowering and practical, striking the perfect balance between encouragement and accountability. Each session left me feeling more focused, confident, and equipped with actionable steps to move forward.",
    name: "Adalise Brink",
    role: "Partner & Psychometrist, Talent Profiles",
  },
  {
    quote: "Sarah has been an incredible support on my journey. The coaching sessions helped me see things more clearly, build confidence, and take real steps toward my goals. It was a truly empowering experience, and I'm very grateful for the positive changes it brought.",
    name: "Annuschka Marais",
    role: "Managing Partner & Psychometrist, Talent Profiles",
  },
  {
    quote: "I came in feeling stuck and left with a clear roadmap. Sarah has a gift for asking exactly the right question at the right moment. I can't recommend this enough.",
    name: "Michael T.",
    role: "Entrepreneur",
  },
];

const plans = [
  {
    title: "Break Free",
    label: "Single Session",
    price: "$150",
    description: "A focused 75-minute coaching session to help you pause, untangle what feels stuck, and leave with clearer next steps.",
    bestFor: "Specific decisions, emotional blocks, self-doubt, overwhelm, or moments of uncertainty.",
    popular: false,
    includes: [
      "75-minute private coaching session",
      "Pre-session reflection prompt",
      "Personalised action steps",
      "Follow-up summary notes",
    ],
  },
  {
    title: "Break Through",
    label: "4-Session Journey",
    price: "$410",
    description: "A structured coaching journey to help you move beyond old patterns, rebuild confidence, and create practical forward movement.",
    bestFor: "Feeling stuck, navigating change, rebuilding confidence, or wanting guided support over time.",
    popular: true,
    includes: [
      "4 × 60-minute private coaching sessions",
      "Personalised coaching approach",
      "Reflection tools and exercises between sessions",
      "Accountability check-ins",
      "Follow-up summary notes after each session",
    ],
  },
  {
    title: "Become",
    label: "6-Session Journey",
    price: "$650",
    description: "A deeper coaching journey for meaningful growth, renewed direction, and becoming more aligned with the person you are ready to be.",
    bestFor: "Bigger transitions, identity shifts, long-term growth, confidence, purpose, and personal transformation.",
    popular: false,
    includes: [
      "6 × 60-minute private coaching sessions",
      "Deep-dive discovery session",
      "Customised tools and reflection exercises",
      "Ongoing accountability and support",
      "Follow-up summary notes after each session",
      "Optional voice message support between sessions",
    ],
  },
];

const discoveryCallBullets = [
  "Free 30-minute discovery call",
  "Explore which pathway fits best",
  "Ask questions before choosing",
  "No pressure or commitment",
];

export default function Pathways() {
  const [, setLocation] = useLocation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen text-foreground font-sans bg-background">
      <ScrollWidgets />
      <Nav />

      {/* Page Header Banner */}
      <section className="pt-20 relative overflow-hidden bg-[#2f3e46]">
        <div className="hidden md:block absolute pointer-events-none select-none"
          style={{ right: "-6%", bottom: "-10%", width: "42%" }}
        >
          <img
            src={treeImg}
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain opacity-[0.13]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            className="max-w-xl space-y-5"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Private Coaching</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              Coaching Pathways
            </h1>
            <p className="font-serif text-2xl italic text-white/70">
              Break Free. Break Through. Become.<span className="not-italic" style={{fontSize:"0.75em", verticalAlign:"text-top", lineHeight:1}}>™</span>
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Private one-on-one coaching designed to meet you where you are and move you toward the life you are ready to build.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-white text-[#2f3e46] px-7 py-3 rounded-sm text-sm font-bold tracking-wide hover:bg-white/90 transition-colors mt-2"
              onClick={() => document.getElementById("pathways-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Pathways <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Private coaching for the moments you're ready to move forward
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Whether you need one focused conversation or a deeper coaching journey, each pathway is designed to meet you where you are and help you move forward with clarity, confidence, and purpose.
            </p>
            <p>
              All sessions are held privately with Sarah — personalised, judgment-free, and grounded in practical action.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pathways Cards */}
      <section id="pathways-section" className="pb-20 px-6 bg-[#f9f7f4] pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              className={`relative flex flex-col rounded-sm border ${plan.popular ? "border-primary shadow-xl bg-white" : "border-border bg-white shadow-sm"} p-10`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-5 py-1.5 rounded-full shadow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-2 mb-8">
                <p className="text-xs font-bold tracking-widest text-primary uppercase">{plan.label}</p>
                <h3 className="font-serif text-4xl text-foreground">
                  {plan.title}<span className="font-sans" style={{fontSize:"0.55em", verticalAlign:"text-top", lineHeight:1}}>™</span>
                </h3>
                <p className="font-serif text-5xl text-primary pt-2">{plan.price}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{plan.description}</p>

              <div className="mb-6">
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">What's included</p>
                <ul className="space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 flex-1">
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Best for</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.bestFor}</p>
              </div>

              <a
                href="https://forms.gle/Mbe9AFjqEPLcrtSK9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-sm font-medium tracking-wide transition-colors bg-primary text-primary-foreground hover:bg-primary/90 text-center block"
              >
                Start This Pathway
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Discovery Call Section */}
      <section id="discovery-call" className="py-24 px-6 bg-[#f9f7f4] border-t border-border/40">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Not sure which pathway is right for you?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Book a free 30-minute discovery call to talk through where you are, what feels stuck, and which Forward 41 pathway may fit best.
            <br /><br />
            No pressure. No commitment. Just a clear conversation about your next step.
          </p>
          <div className="flex flex-col items-center gap-3 pt-1">
            {discoveryCallBullets.map((item) => (
              <div key={item} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#52796F" }} />
                {item}
              </div>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="https://calendly.com/forward41"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-white text-sm font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#52796F" }}
            >
              Book a Free Discovery Call
            </a>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <Quote className="w-10 h-10 text-primary/30 mx-auto rotate-180" />
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic">
              "{testimonials[activeTestimonial].quote}"
            </p>
            <div className="space-y-1">
              <p className="font-semibold text-sm tracking-wide text-foreground">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeTestimonial ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-white text-center" style={{ backgroundColor: "#2F3E46" }}>
        <motion.div
          className="max-w-2xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Ready to Begin?</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Take the first step today</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Book a free 30-minute discovery call to find out which pathway is right for you.
          </p>
          <a
            href="https://calendly.com/forward41"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#2f3e46] px-10 py-4 rounded-sm text-sm font-bold tracking-wide hover:bg-white/90 transition-colors mt-2"
          >
            Book a Free Call <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
