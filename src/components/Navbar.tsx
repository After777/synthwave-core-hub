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
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-sm font-bold text-foreground/70 hover:text-primary transition-all duration-500 group uppercase tracking-[0.15em] futuristic-nav-link"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Neon underline glow */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-500 shadow-[0_0_8px_hsl(var(--primary))]"></span>
                {/* Subtle background glow on hover */}
                <span className="absolute inset-0 -z-10 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-150"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-8 py-3 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-sm shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] hover:scale-105 transition-all duration-500 uppercase tracking-[0.2em] border border-primary/30 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
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
