import { ExternalLink, Clock } from "lucide-react";
import aramanaProject from "@/assets/aramana-project.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OurProject = () => {
  return (
    <section id="our-project" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary glow-text">
              Portfolio
            </h2>
          </div>

          {/* Projects Carousel */}
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {/* Aramana Hospital Project */}
              <CarouselItem className="md:basis-1/2">
                <div className="glass-effect rounded-2xl p-6 space-y-4 hover-lift h-full">
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
              </CarouselItem>

              {/* Coming Soon Project */}
              <CarouselItem className="md:basis-1/2">
                <div className="glass-effect rounded-2xl p-6 space-y-4 hover-lift flex flex-col justify-center items-center text-center h-full min-h-[360px]">
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
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
