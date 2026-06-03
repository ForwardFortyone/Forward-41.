import { Helmet } from "react-helmet-async";
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
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Book a Discovery Call | Forward 41</title>
        <meta name="description" content="Book a free 30-minute discovery call with Sarah Johnson at Forward 41. A clear conversation about where you are and which coaching pathway fits best." />
        <meta property="og:title" content="Book a Discovery Call | Forward 41" />
        <meta property="og:description" content="Book a free 30-minute discovery call with Sarah Johnson at Forward 41. A clear conversation about where you are and which coaching pathway fits best." />
        <meta name="twitter:title" content="Book a Discovery Call | Forward 41" />
        <meta name="twitter:description" content="Book a free 30-minute discovery call with Sarah Johnson at Forward 41. A clear conversation about where you are and which coaching pathway fits best." />
      </Helmet>
      <Nav />

      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="space-y-8"
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

            <div className="flex flex-col items-center gap-3 pt-2">
              {bullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="https://calendly.com/forward41"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground text-background px-10 py-4 text-base font-medium tracking-wide hover:opacity-80 transition-opacity"
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
