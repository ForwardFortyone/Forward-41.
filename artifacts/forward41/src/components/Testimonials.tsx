import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Working with Sarah has been a game-changer. Her coaching style is empowering and practical, striking the perfect balance between encouragement and accountability. Each session left me feeling more focused, confident, and equipped with actionable steps to move forward. What stood out most was her genuine commitment to my growth and success.",
    name: "Adalise Brink",
    role: "Partner & Psychometrist, Talent Profiles",
  },
  {
    quote: "Sarah has been an incredible support on my journey. From the beginning, she made me feel heard and understood. The coaching sessions helped me see things more clearly, build confidence, and take real steps toward my goals. What I appreciated most was how Sarah asked the right questions and encouraged me to find my own answers.",
    name: "Annuschka Marais",
    role: "Managing Partner & Psychometrist, Talent Profiles",
  },
  {
    quote: "I came in feeling stuck and left with a clear roadmap. Sarah has a gift for asking exactly the right question at the right moment. I can't recommend this enough.",
    name: "Michael T.",
    role: "Entrepreneur",
  },
  {
    quote: "Sarah helped me stop playing small. Six months later I left a job I hated, rebuilt my relationships, and finally feel like myself again.",
    name: "Lauren M.",
    role: "Creative Director",
  },
  {
    quote: "The Life Mastery program gave me tools I use every single day. It's the best investment I've ever made in myself — worth every minute.",
    name: "Priya S.",
    role: "Healthcare Professional",
  },
];

const INTERVAL = 5000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="py-24 px-6 bg-[#2f3e46] text-background overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* label */}
        <p className="text-sm font-bold tracking-widest text-background/50 uppercase mb-6">
          Client Stories
        </p>

        {/* giant decorative quote mark */}
        <div
          className="leading-none select-none pointer-events-none mb-[-3rem] opacity-20"
          style={{ fontFamily: "'Bellefair', serif", fontSize: "13rem", color: "currentColor" }}
          aria-hidden="true"
        >
          &#x201C;
        </div>

        {/* quote area */}
        <div
          className="relative min-h-[180px] flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="space-y-6"
            >
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-background/90 max-w-3xl mx-auto">
                {TESTIMONIALS[active].quote}
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-sm tracking-wide text-background">
                  {TESTIMONIALS[active].name}
                </p>
                <p className="text-sm text-background/50">
                  {TESTIMONIALS[active].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* navigation dots */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => { setActive(i); setPaused(true); }}
              className="relative w-2 h-2 rounded-full transition-all duration-300 focus:outline-none"
              style={{
                backgroundColor: i === active ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.25)",
                transform: i === active ? "scale(1.35)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* progress bar */}
        {!paused && (
          <div className="mt-6 mx-auto w-24 h-[2px] bg-background/15 rounded-full overflow-hidden">
            <motion.div
              key={active}
              className="h-full bg-background/50 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: INTERVAL / 1000, ease: "linear" }}
            />
          </div>
        )}

      </div>
    </section>
  );
}
