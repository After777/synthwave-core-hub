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
    <footer className="py-12 px-6 relative border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-center md:text-left">
            © 2025 Rav Labs — Crafted with passion and precision.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
