import { Mail, Phone, Instagram } from "lucide-react";

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
    <section id="contact" className="section-spacing container-padding relative">
      {/* Professional Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
            Get In Touch
          </div>
          
          <h2 className="heading-secondary glow-text mb-6 text-balance">
            Ready to Start
            <br />
            <span className="text-primary">Your Project?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Chat with our pricing assistant or reach out directly—we're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-effect-strong rounded-xl p-5 hover-lift hover-glow group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">{info.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Additional Info Card */}
            <div className="glass-effect-strong rounded-xl p-6 mt-8">
              <h4 className="font-bold mb-3 text-primary">Why Choose Rav Labs?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Professional quality guaranteed
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Fast turnaround time
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Transparent, affordable pricing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Ongoing support included
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="animate-fade-in">
            <div className="glass-effect-strong rounded-2xl p-8 shadow-xl h-full flex flex-col justify-center">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4">Pricing Information</h3>
                
                <p className="text-lg text-foreground/90 leading-relaxed">
                  To know about pricing, please contact us as given above
                </p>
                
                <div className="pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-4">Get in touch for a custom quote</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href="mailto:contactravlabs@gmail.com"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Email Us
                    </a>
                    <a 
                      href="tel:+919030440487"
                      className="px-6 py-3 rounded-xl border-2 border-primary/50 bg-card/50 text-foreground font-semibold text-sm hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
