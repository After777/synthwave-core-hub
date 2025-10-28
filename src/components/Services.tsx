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
    <section id="services" className="py-24 px-6 relative">
      {/* Neon Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text mb-4">
            What We <span className="text-primary">Do</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 hover-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
