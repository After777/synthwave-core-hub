import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Urban Fitness Studio",
    category: "Gym Website",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Bloom Boutique",
    category: "E-Commerce",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Tech Startup Hub",
    category: "Corporate Site",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Artisan Coffee Co.",
    category: "Brand Site",
    color: "from-orange-500 to-red-500",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 relative">
      {/* Neon Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl glass-effect hover-glow cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8 h-64 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>

                {/* View Project Link */}
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-semibold">View Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Neon Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
