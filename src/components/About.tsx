import aboutGraphic from "@/assets/about-graphic.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Neon Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text">
              Who We <span className="text-primary">Are</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rav Labs is a next-gen creative agency that designs powerful, high-quality websites for growing businesses.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help shops, gyms, and brands go digital with style, speed, and precision.
            </p>
          </div>

          {/* Graphic */}
          <div className="relative group animate-fade-in">
            <div className="glass-effect rounded-2xl p-8 hover-glow">
              <img 
                src={aboutGraphic} 
                alt="Rav Labs Technology" 
                className="w-full h-auto rounded-lg animate-pulse-glow"
              />
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl -z-10 group-hover:bg-primary/30 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
