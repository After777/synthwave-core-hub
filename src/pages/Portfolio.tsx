import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "fitness-empire",
    title: "Fitness Empire Gym",
    description: "Modern fitness platform with online booking, trainer profiles, and membership management for India's fastest-growing gym chain.",
    image: "/api/placeholder/800/600",
    tags: ["React", "Next.js", "Tailwind", "Stripe"],
    results: ["Launched in 14 days", "+180% member inquiries", "98 Lighthouse score"],
  },
  {
    id: "spice-junction",
    title: "Spice Junction Restaurant",
    description: "Full-featured e-commerce platform with online ordering, table reservations, and real-time kitchen management system.",
    image: "/api/placeholder/800/600",
    tags: ["Next.js", "Shopify", "Framer Motion", "Node.js"],
    results: ["3x online orders", "35% faster checkout", "99.9% uptime"],
  },
  {
    id: "prime-realty",
    title: "Prime Realty Platform",
    description: "Comprehensive real estate marketplace with virtual tours, advanced search filters, and agent CRM integration.",
    image: "/api/placeholder/800/600",
    tags: ["React", "TypeScript", "PostgreSQL", "Maps API"],
    results: ["500+ properties listed", "+220% lead generation", "Mobile-first design"],
  },
  {
    id: "corporate-consulting",
    title: "Apex Corporate Consulting",
    description: "Professional corporate website with service showcase, case studies, team profiles, and integrated booking system.",
    image: "/api/placeholder/800/600",
    tags: ["Next.js", "Tailwind", "Framer Motion", "CMS"],
    results: ["Premium design", "42% conversion rate", "International clients"],
  },
  {
    id: "heritage-jewels",
    title: "Heritage Jewels 3D Store",
    description: "Luxury jewelry e-commerce with interactive 3D product viewer, AR try-on, and secure payment gateway integration.",
    image: "/api/placeholder/800/600",
    tags: ["React", "Three.js", "Shopify", "AR SDK"],
    results: ["+300% engagement", "3D product viewer", "Secure payments"],
  },
  {
    id: "logistics-dashboard",
    title: "FleetTrack Logistics SaaS",
    description: "Real-time logistics management dashboard with GPS tracking, route optimization, and automated reporting for fleet operations.",
    image: "/api/placeholder/800/600",
    tags: ["React", "TypeScript", "WebSocket", "Dashboard"],
    results: ["Real-time tracking", "40% efficiency boost", "Multi-tenant"],
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Rav Labs | Case Studies & Projects</title>
        <meta name="description" content="Explore Rav Labs' portfolio of high-converting websites, e-commerce platforms, and SaaS dashboards built for Indian businesses. View our case studies and results." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Rav Labs Portfolio",
            "description": "Portfolio showcasing web development projects and case studies",
            "creator": {
              "@type": "Organization",
              "name": "Rav Labs"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description
              }
            }))
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-6 animate-hero-entrance">
              <h1 className="heading-primary text-primary glow-text">
                Our Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real projects. Real results. Explore how we've helped Indian businesses launch stunning digital experiences that convert.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="glass-effect rounded-xl overflow-hidden hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-2 pt-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="hero"
                      className="w-full group/btn"
                      onClick={() => window.location.href = `/portfolio/${project.id}`}
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary glow-text">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's create a stunning digital experience that drives real results for your business.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.location.href = "/#contact"}
              className="shadow-[0_0_40px_hsl(var(--primary)/0.6)]"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
