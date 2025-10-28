import { Mail, Phone, Instagram } from "lucide-react";
import ChatBot from "@/components/ChatBot";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contactravlabs@gmail.com",
      href: "mailto:contactravlabs@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9030440487",
      href: "tel:+919030440487",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@ravlabs.contact",
      href: "https://instagram.com/ravlabs.contact",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Neon Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text mb-4">
            Let's Build Something <span className="text-primary">Great Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-effect rounded-lg p-4 hover-glow group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-semibold">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Pricing Chatbot */}
          <div className="animate-fade-in">
            <ChatBot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
