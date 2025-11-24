import { ExternalLink, Clock } from "lucide-react";
import aramanaProject from "@/assets/aramana-project.jpg";

const OurProject = () => {
  return (
    <section id="our-project" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary glow-text">
              Our Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Aramana Hospital Project */}
            <div className="glass-effect rounded-2xl p-6 space-y-4 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <a
                href="https://aramanahospital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span>aramanahospital.com</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
              
              <a
                href="https://aramanahospital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden group border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <img
                  src={aramanaProject}
                  alt="Aramana Hospital Website"
                  loading="lazy"
                  className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            </div>

            {/* Coming Soon Project */}
            <div className="glass-effect rounded-2xl p-6 space-y-4 hover-lift animate-fade-in flex flex-col justify-center items-center text-center min-h-[360px]" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text">
                Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-xs">
                More exciting projects on the way. Stay tuned for our latest work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
