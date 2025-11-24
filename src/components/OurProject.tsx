import { ExternalLink } from "lucide-react";
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
              Our Project
            </h2>
            <a
              href="https://aramanahospital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl md:text-2xl text-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span className="font-semibold">aramanahospital.com</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Project Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="https://aramanahospital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-effect rounded-2xl overflow-hidden hover-lift group"
            >
              <img
                src={aramanaProject}
                alt="Aramana Hospital Website"
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
