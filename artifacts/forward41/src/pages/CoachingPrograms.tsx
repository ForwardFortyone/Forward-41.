import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollWidgets from "../components/ScrollWidgets";
import treeImg from "@assets/4_1778774206980.png";
import imgBalanced from "@assets/1_1780333753790.png";
import imgFocused from "@assets/2_1780333753792.png";
import imgConsistent from "@assets/3_1780333753792.png";
import imgAligned from "@assets/4_1780333753793.png";
import imgUnstoppable from "@assets/5_1780333753793.png";
import imgFree from "@assets/6_1780333753794.png";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const programs = [
  {
    title: "I AM FREE",
    subtitle: "Liberation & Freedom Challenge",
    description:
      "Clear mental clutter, eliminate what drains you, and rebuild your life with clarity and intention. Through powerful coaching tools, you'll take control of your habits, relationships, energy, and direction, so you can create space for what truly matters and move forward with focus, purpose, and momentum.",
    image: imgFree,
  },
  {
    title: "I AM FOCUSED",
    subtitle: "Clarity & Concentration Challenge",
    description:
      "Cut through distraction, quiet the noise, and reconnect with what matters most. Through practical coaching tools, guided reflection, and focused action steps, you'll learn how to set clearer priorities, protect your attention, and build the mental discipline needed to move forward with purpose and confidence.",
    image: imgFocused,
  },
  {
    title: "I AM CONSISTENT",
    subtitle: "Identity & Discipline Challenge",
    description:
      "Build the habits, routines, and inner discipline needed to keep showing up, even when motivation fades. Through structured coaching tools and practical weekly actions, you'll learn how to create sustainable momentum, follow through on your goals, and become the kind of person who does what they say they will do.",
    image: imgConsistent,
  },
  {
    title: "I AM ALIGNED",
    subtitle: "Self-Discovery Challenge",
    description:
      "Reconnect with who you truly are beneath the noise. Through powerful coaching tools, deep reflection, and guided exercises, you'll uncover your values, rebuild your confidence, and silence self-doubt, so you can live with clarity, purpose, and alignment. This isn't surface-level self-help. This is self-discovery that creates meaningful change.",
    image: imgAligned,
  },
  {
    title: "I AM BALANCED",
    subtitle: "Nervous System & Self-Care Challenge",
    description:
      "Reclaim your time, energy, and sense of self in this guided 8-week journey. Through powerful coaching tools and weekly reflection, you'll uncover what's draining you, set healthier boundaries, and rebuild habits that support a calmer, more balanced life. This is your space to reset, realign, and start showing up as your best self consistently.",
    image: imgBalanced,
  },
  {
    title: "I AM UNSTOPPABLE",
    subtitle: "Momentum & Empowerment Challenge",
    description:
      "Take control of your life, build powerful habits, and create lasting momentum. Through practical tools, structured weekly actions, and neuroscience-informed coaching, you'll gain clarity, overcome procrastination, and execute with confidence, so you can move from stuck to unstoppable.",
    image: imgUnstoppable,
  },
];

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
  {
    quote: "The program gave me tools I use every single day. It's the best investment I've ever made in myself.",
    name: "Priya S.",
    role: "Healthcare Professional",
  },
];

export default function CoachingPrograms() {
  const [, setLocation] = useLocation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen text-foreground font-sans bg-background">
      <Helmet>
        <title>Coaching Programs | Forward 41</title>
        <meta name="description" content="Explore the Forward 41 I AM Series — six self-paced coaching programs designed to build clarity, confidence, and meaningful change in your life." />
        <meta property="og:title" content="Coaching Programs | Forward 41" />
        <meta property="og:description" content="Explore the Forward 41 I AM Series — six self-paced coaching programs designed to build clarity, confidence, and meaningful change in your life." />
        <meta name="twitter:title" content="Coaching Programs | Forward 41" />
        <meta name="twitter:description" content="Explore the Forward 41 I AM Series — six self-paced coaching programs designed to build clarity, confidence, and meaningful change in your life." />
      </Helmet>
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
            <p className="text-xs font-bold tracking-widest text-white/50 uppercase">I AM Series</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              Coaching Programs
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Six structured self-paced programs designed to help you build clarity, confidence, and meaningful change — one challenge at a time.
            </p>
            <a
              href="https://www.skool.com/forward-41-7455/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#2f3e46] px-7 py-3 rounded-sm text-sm font-bold tracking-wide hover:bg-white/90 transition-colors mt-2"
            >
              Explore Programs <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
            Begin a new chapter in your growth
          </h2>
          <div className="w-12 h-0.5" style={{ backgroundColor: "#52796F" }} />
          <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
            <p>
              The I AM series are practical, self-paced coaching programs built around one clear focus each — so you can go deep on what matters most right now.
            </p>
            <p>
              Whether you are feeling stuck, navigating change, or ready for a new season, each program gives you the tools, reflection prompts, and structured actions to move forward with purpose and confidence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section id="programs-section" className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              className="bg-white rounded-sm overflow-hidden shadow-sm border border-border flex flex-col group"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
            >
              {/* Program image */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-[#2f3e46]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-8 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold tracking-widest text-primary uppercase">{program.subtitle}</p>
                  <h3 className="font-serif text-2xl text-foreground leading-snug">{program.title}</h3>
                </div>

                <p className="text-foreground/65 text-sm leading-relaxed flex-1">
                  {program.description}
                </p>

                <div className="pt-2">
                  <a
                    href="https://www.skool.com/forward-41-7455/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-bold tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    Explore Program <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Private Coaching CTA */}
      <section className="py-20 px-6 bg-[#2f3e46] text-white text-center">
        <motion.div
          className="max-w-2xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Private Coaching</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Looking for one-on-one support?</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Work with Sarah in a private coaching space — explore the Break Free, Break Through, and Become pathways.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-white text-[#2f3e46] px-10 py-4 rounded-sm text-sm font-bold tracking-wide hover:bg-white/90 transition-colors mt-2"
            onClick={() => setLocation("/pathways")}
          >
            View Coaching Pathways <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
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
              <p className="text-sm text-foreground/55">{testimonials[activeTestimonial].role}</p>
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

      <Footer />
    </div>
  );
}
