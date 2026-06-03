import { useLocation } from "wouter";
import logoImg from "../assets/logo-transparent.png";

export default function Footer() {
  const [, setLocation] = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "Meet Sarah", path: "/meet-sarah" },
    { label: "Coaching Programs", path: "/coaching-programs" },
    { label: "Coaching Pathways", path: "/pathways" },
  ];

  return (
    <footer style={{ backgroundColor: "#354F52", color: "#F5F5F5" }} className="px-8">
      {/* Main row — matches navbar height */}
      <div className="max-w-7xl mx-auto h-20 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <img
          src={logoImg}
          alt="Forward 41"
          className="h-auto cursor-pointer object-contain flex-shrink-0"
          style={{ width: "160px", filter: "brightness(0) invert(1)" }}
          onClick={() => setLocation("/")}
          data-testid="img-logo-footer"
        />

        {/* Nav links */}
        <nav className="flex items-center gap-6 flex-nowrap">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => setLocation(link.path)}
              className="whitespace-nowrap text-sm opacity-70 hover:opacity-100 transition-opacity"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#F5F5F5" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <p
          className="whitespace-nowrap text-xs opacity-40"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#F5F5F5" }}
        >
          © {new Date().getFullYear()} Forward 41
        </p>
      </div>
    </footer>
  );
}
