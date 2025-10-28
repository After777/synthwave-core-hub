import { useRef } from "react";
import { Monitor, Palette, Settings, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "We craft websites that don't just look good — they perform. Our focus is on creating premium, modern designs that engage users and deliver results. Every project is built to be fast, responsive, and aligned with your brand's identity. From sleek visuals to flawless functionality, we make sure your digital presence feels bold, professional, and future-ready.",
  },
  {
    icon: Palette,
    title: "Brand Identity & UI/UX Design",
    description: "Your brand deserves more than just a logo — it needs a story. We design powerful brand identities that reflect your vision, personality, and purpose. From logo design to complete visual systems, we help your brand stand out and connect deeply with your audience. Note: Brand identity and logo creation are billed separately from web development.",
  },
  {
    icon: Settings,
    title: "Hosting & Maintenance",
    description: "We take care of everything that keeps your website running perfectly — hosting, security, updates, and performance checks. These services are fully managed under our maintenance plan, so you don't have to worry about extra charges or downtime. Your site stays secure, stable, and optimized at all times.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Optimization",
    description: "We ensure your website gets noticed. Our SEO process focuses on visibility, speed, and ranking — helping you reach the right audience faster. From keyword optimization to site performance and analytics, we make sure your site not only looks good but performs like a pro in search results.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className={`section-spacing container-padding relative scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      {/* Professional Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
            Our Services
          </div>
          
          <h2 className="heading-secondary glow-text mb-6 text-balance hover-glow-text">
            Everything You Need to
            <br />
            <span className="text-primary">Succeed Online</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-balance">
            Comprehensive web solutions designed to grow your business
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect-strong rounded-2xl p-10 hover-lift hover-glow group animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 hover-glow-text">{service.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
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
