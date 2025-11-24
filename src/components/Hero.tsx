import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/30 blur-sm animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 6 + 's',
              animationDuration: Math.random() * 4 + 4 + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto container-padding z-10 text-center pt-20">
        <div className="animate-hero-entrance max-w-5xl mx-auto">
          <h1 className="heading-primary font-black mb-6 glow-text text-balance hover-glow-text">
            Build Your Digital
            <br />
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
              Presence Today
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            Transform your business with stunning, high-performance websites crafted by experts. 
            <span className="text-foreground font-medium"> From concept to launch in weeks, not months.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto text-base font-semibold hover-lift"
            >
              Start Your Project
            </Button>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => window.location.href = '/portfolio'}
              className="w-full sm:w-auto text-base font-semibold"
            >
              Portfolio
            </Button>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto text-base font-semibold"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Affordable Pricing</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
