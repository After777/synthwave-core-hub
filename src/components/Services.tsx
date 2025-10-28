import { Monitor, Palette, Settings, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Modern, fast, and scalable websites tailored for your brand.",
  },
  {
    icon: Palette,
    title: "Brand Identity & UI/UX",
    description: "Creative designs that connect and convert.",
  },
  {
    icon: Settings,
    title: "Hosting & Maintenance",
    description: "Seamless performance with zero downtime.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Optimization",
    description: "Rank higher. Load faster. Grow stronger.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing container-padding relative">
      {/* Professional Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
            Our Services
          </div>
          
          <h2 className="heading-secondary glow-text mb-6 text-balance">
            Everything You Need to
            <br />
            <span className="text-primary">Succeed Online</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-balance">
            Comprehensive web solutions designed to grow your business
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect-strong rounded-2xl p-8 hover-lift hover-glow group animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
