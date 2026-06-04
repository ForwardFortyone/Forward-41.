import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoImg from "../assets/logo-transparent.png";

export default function Nav() {
  const [location, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => {
    setLocation("/");
    setMenuOpen(false);
  };

  const goBookCall = () => {
    setMenuOpen(false);
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

  const navLinks = [
    {
      label: "Home",
      action: () => {
        setMenuOpen(false);
        if (location === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setLocation("/");
          setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
        }
      },
      activePath: "/",
    },
    { label: "Meet Sarah", action: () => { setLocation("/meet-sarah"); setMenuOpen(false); }, activePath: "/meet-sarah" },
    { label: "Coaching Programs", action: () => { setLocation("/coaching-programs"); setMenuOpen(false); }, activePath: "/coaching-programs" },
    { label: "Coaching Pathways", action: () => { setLocation("/pathways"); setMenuOpen(false); }, activePath: "/pathways" },
  ];

  const isActive = (activePath: string | null) => {
    if (!activePath) return false;
    if (activePath === "/") return location === "/";
    return location === activePath;
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <button onClick={goHome} className="flex items-center flex-shrink-0 focus:outline-none" aria-label="Forward 41 home">
          <img
            src={logoImg}
            alt="Forward 41"
            className="h-auto object-contain cursor-pointer"
            style={{ width: "180px" }}
            data-testid="img-logo"
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.activePath);
            return (
              <button
                key={link.label}
                onClick={link.action}
                className={[
                  "text-sm transition-colors pb-0.5 tracking-wide",
                  active
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground border-b-2 border-transparent hover:text-primary",
                ].join(" ")}
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            data-testid="button-nav-book"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm hover:bg-primary/90 transition-colors text-sm tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            onClick={goBookCall}
          >
            Book a Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          data-testid="button-nav-mobile-toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence initial={false}>
        {menuOpen && (
        <motion.div
          className="md:hidden bg-background border-t border-border shadow-md overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          <div className="px-7 pt-4 pb-6 flex flex-col">

            {/* Nav links */}
            {navLinks.map((link) => {
              const active = isActive(link.activePath);
              return (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-left py-3 transition-colors focus:outline-none"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    letterSpacing: "0.025em",
                    color: active ? "#52796F" : "#2F3E46",
                  }}
                >
                  {/* Underline scoped to text width only */}
                  <span
                    style={{
                      display: "inline-block",
                      borderBottom: active ? "2px solid #52796F" : "2px solid transparent",
                      paddingBottom: "2px",
                      lineHeight: 1.4,
                    }}
                  >
                    {link.label}
                  </span>
                </button>
              );
            })}

            {/* Divider */}
            <div className="mt-2 mb-4 border-t border-border/50" />

            {/* Book a Call — intentional width, not full-bleed */}
            <button
              onClick={goBookCall}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                backgroundColor: "#52796F",
                color: "#ffffff",
                padding: "12px 32px",
                borderRadius: "2px",
                alignSelf: "flex-start",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Book a Call
            </button>

          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
