import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-sm font-bold tracking-widest text-primary uppercase">Let's Connect</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">Book a Discovery Call</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Ready to take the first step toward a more fulfilling life? Reach out and I will personally get back to you to schedule a free discovery call.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Free 30-minute discovery call",
                "No commitment required",
                "Tailored to your specific goals",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
