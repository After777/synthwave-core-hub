import { useRef } from "react";
import aboutGraphic from "@/assets/about-graphic.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`section-spacing container-padding relative scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      {/* Professional Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                About Us
              </div>
              
              <h2 className="heading-secondary glow-text text-balance hover-glow-text">
                Digital Excellence,
                <br />
                <span className="text-primary">Delivered Fast</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl text-foreground font-semibold leading-relaxed">
                We are a new development Agency we make sure provide 100%
              </p>
              
              <p className="text-base text-foreground/90 leading-relaxed">
                At Our Services, we focus on delivering high-quality websites using the best technology available. We help gyms, small brands, and local shops create a strong online presence that looks great and performs even better. Our goal is to make your business stand out with a professional, secure, and easy-to-manage website. We're proud to be 100% trusted by our clients and committed to providing real value with every project we take on.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">Fast</div>
                <div className="text-sm text-muted-foreground">Delivery</div>
              </div>
            </div>
          </div>

          {/* Graphic */}
          <div className="relative group animate-fade-in md:order-last order-first">
            <div className="glass-effect-strong rounded-3xl p-8 hover-lift">
              <img 
                src={aboutGraphic} 
                alt="Rav Labs - Professional Web Development Technology" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-radial rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
