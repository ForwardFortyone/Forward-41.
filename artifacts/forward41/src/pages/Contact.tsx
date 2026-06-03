import { useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const bullets = [
  "Free 30-minute discovery call",
  "Explore which pathway fits best",
  "Ask questions before choosing",
  "No pressure or commitment",
];

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="space-y-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-sm font-bold tracking-widest text-primary uppercase">Discovery Call</p>

            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              Book a discovery call
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Ready to explore whether private coaching is the right next step?
              <br /><br />
              Book a free 30-minute discovery call to talk through where you are, what feels stuck, and which Forward 41 pathway may fit best.
              <br /><br />
              No pressure. No commitment. Just a clear conversation about your next step.
            </p>

            <div className="flex flex-col items-center gap-3 pt-2 pb-4">
              {bullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget w-full rounded-sm overflow-hidden"
            data-url="https://calendly.com/forward41"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
