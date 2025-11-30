import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import aramanaFullPage from "@/assets/aramana-full-page.jpg";

const projects = [
  {
    id: "aramana-hospital",
    title: "Aramana Hospital & Heart Centre",
    description: "Comprehensive healthcare platform with doctor profiles, appointment booking, multi-specialty services showcase, and 24/7 emergency care integration.",
    fullPageImage: aramanaFullPage,
    tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    results: ["50+ doctors onboarded", "+160% online appointments", "24/7 patient access"],
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Rav Labs | Healthcare Platform Case Study</title>
        <meta name="description" content="Explore Rav Labs' work on Aramana Hospital & Heart Centre - a comprehensive healthcare platform with doctor profiles, appointment booking, and multi-specialty services serving patients across Kerala." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Rav Labs Portfolio",
            "description": "Healthcare platform development case study for Aramana Hospital",
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
              <h1 className="heading-primary text-primary glow-text font-poppins">
                Our Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our featured healthcare platform project - a comprehensive digital solution built for Aramana Hospital & Heart Centre, serving patients across Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="glass-effect rounded-xl overflow-hidden hover-lift group lg:col-span-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image - Full Page */}
                  <div className="p-6 bg-muted/30">
                    <div className="relative aspect-[9/16] md:aspect-video overflow-hidden rounded-lg bg-muted">
                      <img
                        src={project.fullPageImage}
                        alt={`${project.title} full page view`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300 glow-text">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
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
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 rounded-lg bg-accent/10 border border-accent/20">
                          <div className="text-xs text-foreground/70">{result}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full group/btn mt-4"
                      onClick={() => window.location.href = `/portfolio/${project.id}`}
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're in healthcare, e-commerce, or any industry - let's create a stunning digital experience that drives real results for your business.
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
