import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:contactravlabs@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+919030440487",
      label: "Phone",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/ravlabs.contact",
      label: "Instagram",
    },
  ];

  return (
    <footer className="py-16 container-padding relative border-t border-border/50 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2 glow-text">
              <span className="text-primary">Rav</span>Labs
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building digital experiences that elevate businesses. Professional web development, delivered fast.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">Connect With Us</p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center hover-lift hover-glow group border border-primary/20"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="font-semibold text-foreground">Rav Labs</span>. All rights reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
