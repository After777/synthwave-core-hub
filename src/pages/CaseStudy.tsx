import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { ArrowRight, Calendar, Check, Users, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import aramanaFullPage from "@/assets/aramana-full-page.jpg";

const caseStudies = {
  "aramana-hospital": {
    title: "Aramana Hospital & Heart Centre",
    timeline: "21 days from concept to launch",
    hero: {
      subtitle: "Modernizing Healthcare Access in Kerala",
      description: "Built a comprehensive healthcare platform for Aramana Hospital with intuitive doctor profiles, online appointment booking, multi-specialty services showcase, and seamless mobile experience serving patients across Kasaragod, Kerala."
    },
    challenge: {
      title: "The Challenge",
      content: "Aramana Hospital needed a modern digital presence to serve their growing patient base across Kerala. Their existing website lacked online appointment booking, comprehensive doctor profiles, and mobile accessibility - crucial for serving patients in rural and semi-urban areas. Manual appointment booking was causing long wait times, and patients had no way to view specialist schedules or emergency services online."
    },
    solution: {
      title: "Our Solution",
      points: [
        "Interactive doctor profiles with specializations (Gynecology, Cardiology, Dental, etc.)",
        "Online appointment booking system with real-time availability",
        "Multi-specialty services showcase (Cardiac Care, Diagnostics, General Services)",
        "Mobile-first responsive design for rural accessibility",
        "24/7 emergency contact integration (04994 230524, 9207 230524)",
        "Medical services cards with detailed department information",
        "Clean, accessible UI for all age groups and digital literacy levels"
      ]
    },
    results: {
      title: "Results That Matter",
      metrics: [
        { label: "Launch Timeline", value: "21 Days", description: "From concept to production" },
        { label: "Online Appointments", value: "+160%", description: "Increase in bookings" },
        { label: "Doctors Onboarded", value: "50+", description: "Specialist profiles" },
        { label: "Mobile Traffic", value: "72%", description: "Patient accessibility" }
      ]
    },
    techStack: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "SEO Optimization", "Performance Optimization"],
    images: {
      hero: aramanaFullPage,
      before: aramanaFullPage,
      after: aramanaFullPage
    },
    location: "NH 66, Ashwini Nagar, Kasaragod, Kerala 671121",
    website: "https://aramanahospital.com"
  }
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudies[id as keyof typeof caseStudies] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Case Study Not Found</h1>
          <Button variant="hero" onClick={() => window.location.href = "/portfolio"}>
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{study.title} - Case Study | Rav Labs</title>
        <meta name="description" content={study.hero.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": study.title,
            "description": study.hero.description,
            "creator": {
              "@type": "Organization",
              "name": "Rav Labs"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-6 animate-hero-entrance">
              <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{study.timeline}</span>
                </div>
                {study.location && (
                  <>
                    <span>•</span>
                    <span>{study.location}</span>
                  </>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary glow-text">
                {study.title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-semibold">
                {study.hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {study.hero.description}
              </p>
              {study.website && (
                <a 
                  href={study.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Visit Live Website
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-effect rounded-2xl overflow-hidden">
              <img
                src={study.images.hero}
                alt={study.title}
                loading="lazy"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-effect-strong rounded-2xl p-8 md:p-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {study.challenge.title}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {study.challenge.content}
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {study.solution.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.solution.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="glass-effect rounded-xl p-6 hover-lift flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
                Technology Stack
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 rounded-full text-sm font-bold bg-card border-2 border-primary/30 text-primary hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-effect-strong rounded-2xl p-12 text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary glow-text">
                Start Your Project Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's create something amazing together. Get in touch and let's discuss how we can transform your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.location.href = "/#contact"}
                  className="shadow-[0_0_40px_hsl(var(--primary)/0.6)]"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="neon"
                  size="lg"
                  onClick={() => window.location.href = "/portfolio"}
                >
                  View More Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CaseStudy;
