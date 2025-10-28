import { useState, useEffect } from "react";
import logo from "@/assets/ravlabs-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Rav Labs"
              className="h-10 w-auto transition-all duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100 brightness-90 group-hover:brightness-110 saturate-90 group-hover:saturate-100"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.2))',
              }}
            />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 group uppercase tracking-wider"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wide"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="md:hidden p-2 rounded-lg bg-primary/10 text-primary"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
