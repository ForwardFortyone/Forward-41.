import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollWidgets from "../components/ScrollWidgets";
import logoImg from "../assets/logo.png";
import successHabitsImg from "../assets/course-success-habits.png";
import treeImg from "@assets/4_1778774206980.png";
import empoweredLifeImg from "../assets/course-empowered-life.png";
import innerGreatnessImg from "../assets/course-inner-greatness.png";
import totalMentalResilienceImg from "../assets/course-total-mental-resilience.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const courses = [
  {
    id: "success-habits",
    title: "Master the habits of success and achieve your goals",
    description:
      "This course is designed to help you build and maintain the habits that lead to success and achieve lasting success.",
    detail:
      "With 10 in-depth video lessons and a comprehensive eBook, you have the tools and knowledge needed to make positive changes that stick.",
    image: successHabitsImg,
    alt: "Success Habits Online Course",
  },
  {
    id: "empowered-life",
    title: "Reclaim your purpose and build a life of confidence and success",
    description:
      "Feeling stuck and unfulfilled? The Empowered Life is your pathway to personal transformation.",
    detail:
      "This course guides you through practical strategies in self-empowerment, empowering you to embrace change, find purpose, and live a life of true fulfillment.",
    image: empoweredLifeImg,
    alt: "The Empowered Life Online Course",
  },
  {
    id: "inner-greatness",
    title: "Unlock your inner greatness and achieve the life you deserve",
    description:
      "Discover the strategies to overcome self-doubt, master your mindset, and unlock your true potential.",
    detail:
      '"Your Inner Greatness" equips you with practical tools to identify your strengths, build self-esteem, and stay motivated to achieve your goals. With engaging video lessons, a comprehensive eBook, and bonus resources, you\'ll gain the confidence and clarity to transform your life — one step at a time.',
    image: innerGreatnessImg,
    alt: "Inner Greatness Online Course",
  },
  {
    id: "total-mental-resilience",
    title: "Develop the mental fortitude to conquer life's challenges with confidence and grace",
    description:
      "Discover how to thrive under pressure and navigate life's toughest moments with confidence and grace.",
    detail:
      'The "Total Mental Resilience" course provides practical tools to help you build a growth mindset, master persistence, and silence self-doubt. With engaging video lessons, a comprehensive eBook, and powerful bonus resources, you\'ll gain the mental fortitude to turn setbacks into stepping stones and achieve lasting success.',
    image: totalMentalResilienceImg,
    alt: "Total Mental Resilience Online Course",
  },
];

export default function Courses() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen text-foreground font-sans bg-background">
      <ScrollWidgets />
      <Nav />

      {/* Page Header Banner */}
      <section className="pt-20 relative overflow-hidden bg-[#2f3e46]">
        {/* Tree watermark */}
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
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-xl space-y-5"
          >
            <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Self-Paced · Expert-Designed</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              Personal Development Courses
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Grow at your own pace with practical, life-changing courses designed to unlock your potential from the inside out.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-white text-[#2f3e46] px-7 py-3 rounded-sm text-sm font-bold tracking-wide hover:bg-white/90 transition-colors"
              onClick={() => document.getElementById("courses-list")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Courses <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h2
            className="font-serif text-4xl md:text-5xl leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Welcome to the Life Hack Library — your gateway to personal growth and success
          </motion.h2>
          <motion.div
            className="text-muted-foreground text-base leading-relaxed space-y-4 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: 0.15 } } }}
          >
            <p>
              Ready to transform your life? The Life Hack Library is your ultimate resource for powerful, self-paced personal development courses designed to help you elevate your goals, master your mindset, and unlock your full potential.
            </p>
            <p>
              Whether you want to build habits that drive success, overcome challenges with resilience, or create a life filled with purpose and passion, our expertly designed courses provide you with everything you need to think and thrive.
            </p>
            <p>
              Don't wait for change — create it! Start exploring the Life Hack Library today and take the first step toward a brighter, more empowered future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Cards */}
      <section id="courses-list" className="py-20 px-6 bg-[#f5f0eb]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              className="bg-white overflow-hidden rounded-sm flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.08 } } }}
            >
              {/* Image panel */}
              <div className="bg-[#2f3e46] flex items-center justify-center p-10 aspect-[4/3]">
                <img
                  src={course.image}
                  alt={course.alt}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 gap-4">
                <h3 className="font-serif text-2xl leading-snug text-foreground">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.detail}</p>
                <div className="pt-2 mt-auto">
                  <button className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
