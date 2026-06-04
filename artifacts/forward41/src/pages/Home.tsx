import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLocation, Link } from "wouter";
import heroImg from "../assets/hero-portrait.png";
import logoImg from "../assets/logo.png";
import lifeAuditImg from "@assets/ChatGPT_Image_Jun_2,_2026,_07_09_28_PM_1780420270514.png";
import NeuralBackground from "../components/NeuralBackground";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import ScrollWidgets from "../components/ScrollWidgets";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [location, setLocation] = useLocation();

  const goBookCall = () => {
    if (location === "/pathways") {
      const el = document.getElementById("discovery-call");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation("/pathways");
      setTimeout(() => {
        const el = document.getElementById("discovery-call");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  };

  return (
    <div className="min-h-screen text-foreground font-sans">
      <Helmet>
        <title>Forward 41 | Break Free. Break Through. Become.</title>
        <meta name="description" content="Forward 41 offers coaching programs and private coaching pathways to help you move through stuckness, build clarity, and take intentional steps toward meaningful change." />
        <meta property="og:title" content="Forward 41 | Coaching for Clarity, Confidence, and Change" />
        <meta property="og:description" content="Explore Forward 41 coaching programs, private coaching pathways, and resources designed to help you reflect, reset, and move forward with purpose." />
        <meta name="twitter:title" content="Forward 41 | Coaching for Clarity, Confidence, and Change" />
        <meta name="twitter:description" content="Explore Forward 41 coaching programs, private coaching pathways, and resources designed to help you reflect, reset, and move forward with purpose." />
      </Helmet>
      <ScrollWidgets />
      <NeuralBackground />

      <Nav />

      {/* Hero */}
      <section id="hero" className="pt-40 pb-28 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase">Break Free. Break Through. Become.<span style={{fontSize:"0.8em", verticalAlign:"text-top", lineHeight:1}}>™</span></p>
          <h1 className="font-serif text-6xl md:text-8xl leading-[1.05] text-foreground">
            Live A More Fulfilling And Purposeful Life
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Get ready to challenge your thinking and take remarkable steps to build a better life, relationships, and sense of purpose. The possibilities are endless when you invest in yourself.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              data-testid="button-hero-book"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-sm text-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              onClick={goBookCall}
            >
              Book a Call <ChevronRight className="w-5 h-5" />
            </button>
            <button
              className="text-primary font-medium hover:underline inline-flex items-center gap-1 text-lg"
              onClick={() => { const el = document.getElementById('meet-sarah'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Meet Sarah <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-8">
            <p className="font-serif text-2xl italic text-muted-foreground">"The best investment you can make is in yourself."</p>
          </div>
        </motion.div>
      </section>

      {/* Assessment Tool Lead Capture */}
      {/* Free Life Audit */}
      <section className="overflow-hidden" style={{ backgroundColor: "#EDEDE9" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-12 md:py-16">

          {/* Left — image, full composition preserved */}
          <motion.div
            className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center px-6 md:px-10"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={lifeAuditImg}
              alt="Your Life Audit — Wheel of Life Assessment"
              className="w-full h-auto object-contain"
              style={{ maxWidth: "600px" }}
            />
          </motion.div>

          {/* Right — text CTA */}
          <motion.div
            className="w-full md:w-1/2 px-10 md:px-16 flex flex-col justify-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Free Resource
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
              Free Life Audit
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-md">
              <p>
                Take a snapshot of where you are today with the Wheel of Life Assessment.
              </p>
              <p>
                This free exercise helps you reflect on key areas of your life, identify what feels balanced, and see where you may be ready for change, growth, or renewed focus.
              </p>
              <p>
                Access it inside the Forward 41 community and start creating clearer, more intentional next steps.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://www.skool.com/forward-41-7455/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-sm text-sm font-bold tracking-wide hover:bg-primary/90 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Access the Free Life Audit <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="border-b border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Empowering Individuals. Transforming Lives.</p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="about">
        <motion.div 
          className="mb-16 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-5xl mb-6">Start living your best life</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am committed to empowering individuals with research-backed coaching strategies that drive immediate improvements while building a foundation for lasting growth and transformation. I will work with you to foster resilience, clarity, and purpose for the future, and I collaborate to inspire transformation, improve relationships, and create meaningful changes that impact every area of your life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Sustainable Growth",
              desc: "Achieve clarity and actionable goals to build a fulfilling, resilient life"
            },
            {
              title: "Improved Relationships",
              desc: "Strengthen bonds, build trust, and cultivate meaningful connections for personal and professional success"
            },
            {
              title: "Personal Well-Being",
              desc: "Develop strategies to balance stress, improve time management, and bring harmony to all areas of life"
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-2xl font-bold">
                {i + 1}
              </div>
              <h3 className="font-serif text-2xl">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Sarah */}
      <section id="meet-sarah" className="bg-muted py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 w-full max-w-md mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="aspect-square relative rounded-full overflow-hidden border-8 border-white shadow-lg">
              <img src={heroImg} alt="Sarah Johnson" className="object-cover w-full h-full object-top" />
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-serif text-5xl">Hi, I am Sarah Johnson.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a qualified life coach passionate about empowering individuals to unlock their full potential and thrive in all areas. Through personalized coaching, I help clients transform their relationships, enhance well-being, and achieve career growth, laying the foundation for a more successful and fulfilling life.
            </p>
            <div className="pt-4">
              <button
                className="border-2 border-primary text-primary px-8 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-2"
                onClick={() => setLocation("/meet-sarah")}
                data-testid="button-about-learn-more"
              >
                Read Sarah's Story <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 px-6 bg-primary text-primary-foreground text-center">
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-sm font-bold tracking-widest uppercase opacity-80">My Mission</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            "My mission is to help you break free from what keeps you stuck, break through the patterns that limit your growth, and become more confident, purposeful, and aligned in the life you are building."
          </h2>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="services">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-5xl">Choose how you want to move forward</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Coaching Programs",
              desc: "Explore the six I AM coaching programs, each designed to help you grow in a specific area of your life, from clarity and focus to balance, alignment, consistency, and momentum.",
              buttonText: "Explore Programs",
              buttonLink: "/coaching-programs"
            },
            {
              title: "Coaching Pathways",
              desc: "Choose a private coaching pathway designed to meet you where you are, whether you need one focused session or a deeper multi-session journey.",
              buttonText: "View Coaching Pathways",
              buttonLink: "/pathways"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white border border-border p-10 rounded-sm hover:shadow-xl transition-shadow flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="font-serif text-3xl mb-4 text-primary">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
              <div className="pt-8 mt-auto">
                <Link
                  href={service.buttonLink}
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  {service.buttonText} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing / Pathways */}
      <section className="py-28 px-6 bg-[#f9f7f4]" id="pathways">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase">Pathways</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight">Choose your Forward 41. pathway</h2>
          <p className="font-serif text-2xl italic text-muted-foreground">Break Free. Break Through. Become.<span className="not-italic" style={{fontSize:"0.75em", verticalAlign:"text-top", lineHeight:1}}>™</span></p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto pt-2">
            Whether you need one focused conversation or a deeper coaching journey, each pathway is designed to meet you where you are and help you move forward with clarity, confidence, and purpose.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          {[
            {
              title: "Break Free",
              label: "Single Session",
              price: "$150",
              description: "A focused 75-minute coaching session to help you pause, untangle what feels stuck, and leave with clearer next steps.",
              bestFor: "Specific decisions, emotional blocks, self-doubt, overwhelm, or moments of uncertainty.",
              popular: false,
            },
            {
              title: "Break Through",
              label: "4-Session Journey",
              price: "$410",
              description: "A structured coaching journey to help you move beyond old patterns, rebuild confidence, and create practical forward movement.",
              bestFor: "Feeling stuck, navigating change, rebuilding confidence, or wanting guided support over time.",
              popular: true,
            },
            {
              title: "Become",
              label: "6-Session Journey",
              price: "$650",
              description: "A deeper coaching journey for meaningful growth, renewed direction, and becoming more aligned with the person you are ready to be.",
              bestFor: "Bigger transitions, identity shifts, long-term growth, confidence, purpose, and personal transformation.",
              popular: false,
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
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
                <h3 className="font-serif text-4xl text-foreground">{plan.title}<span className="font-sans" style={{fontSize:"0.55em", verticalAlign:"text-top", lineHeight:1}}>™</span></h3>
                <p className="font-serif text-5xl text-primary pt-2">{plan.price}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{plan.description}</p>

              <div className="mb-8">
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Best for</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.bestFor}</p>
              </div>

              <a
                href="https://forms.gle/Mbe9AFjqEPLcrtSK9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-sm font-medium tracking-wide transition-colors bg-primary text-primary-foreground hover:bg-primary/90 text-center block"
                data-testid={`button-pathway-${i}`}
              >
                Start This Pathway
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground mt-14 text-base leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Not sure where to start?{" "}
          <button
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            onClick={goBookCall}
          >
            Book a free discovery call
          </button>{" "}
          and we'll help you choose the pathway that fits where you are right now.
        </motion.p>

      </section>

      {/* Motivation Strip */}
      <section className="bg-muted py-24 px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Change begins when you choose to move forward
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-5 text-left md:text-center">
            <p>
              It is easy to stay in familiar patterns, even when they no longer feel right. But growth often begins with one honest pause, one clearer decision, and one intentional step forward.
            </p>
            <p>
              If you feel stuck, overwhelmed, or unsure where to begin, you do not have to figure it all out at once. Forward 41 is here to help you reflect, reset, and move toward a life that feels more aligned, purposeful, and your own.
            </p>
          </div>
        </motion.div>
      </section>

      <Testimonials />

      <Footer />
    </div>
  );
}
