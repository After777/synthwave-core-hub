import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { ArrowRight, Calendar, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const caseStudies = {
  "fitness-empire": {
    title: "Fitness Empire Gym",
    timeline: "14 days from concept to launch",
    hero: {
      subtitle: "Modern fitness platform transforming gym management",
      description: "Built a comprehensive digital ecosystem for India's fastest-growing gym chain, including online booking, trainer profiles, class schedules, and automated membership management."
    },
    challenge: {
      title: "The Challenge",
      content: "Fitness Empire was struggling with manual booking processes, leading to double-bookings, missed appointments, and frustrated members. They needed a modern digital platform to streamline operations and enhance member experience while maintaining their premium brand image."
    },
    solution: {
      title: "Our Solution",
      points: [
        "Real-time booking system with automated confirmations",
        "Mobile-first responsive design for on-the-go access",
        "Integrated payment gateway with recurring billing",
        "Trainer profiles with availability calendars",
        "Class schedule management with capacity tracking",
        "Member dashboard with workout history and progress tracking"
      ]
    },
    results: {
      title: "Results That Matter",
      metrics: [
        { label: "Member Inquiries", value: "+180%", description: "Increase in monthly sign-ups" },
        { label: "Operational Efficiency", value: "67%", description: "Reduction in admin time" },
        { label: "Lighthouse Score", value: "98/100", description: "Performance excellence" },
        { label: "Launch Timeline", value: "14 days", description: "From concept to production" }
      ]
    },
    techStack: ["React", "Next.js", "Tailwind CSS", "Stripe", "Node.js", "PostgreSQL"],
    images: {
      hero: "/api/placeholder/1200/800",
      before: "/api/placeholder/600/400",
      after: "/api/placeholder/600/400"
    }
  },
  "spice-junction": {
    title: "Spice Junction Restaurant",
    timeline: "21 days including full e-commerce setup",
    hero: {
      subtitle: "Restaurant e-commerce with real-time order management",
      description: "Complete digital transformation for a popular Indian restaurant chain, featuring online ordering, table reservations, menu management, and kitchen display system integration."
    },
    challenge: {
      title: "The Challenge",
      content: "Spice Junction was losing customers to competitors with online ordering. They needed a fast, beautiful e-commerce platform that could handle high-traffic periods, integrate with their kitchen operations, and maintain their authentic brand experience online."
    },
    solution: {
      title: "Our Solution",
      points: [
        "Shopify-powered e-commerce with custom theme",
        "Real-time kitchen management dashboard",
        "Table reservation system with waitlist management",
        "Interactive menu with dietary filters and customization",
        "Order tracking with SMS notifications",
        "Integrated loyalty program and promotional tools"
      ]
    },
    results: {
      title: "Results That Matter",
      metrics: [
        { label: "Online Orders", value: "3x", description: "Triple the orders in 3 months" },
        { label: "Checkout Speed", value: "35%", description: "Faster completion time" },
        { label: "Uptime", value: "99.9%", description: "Reliable during peak hours" },
        { label: "Customer Rating", value: "4.8/5", description: "Platform user satisfaction" }
      ]
    },
    techStack: ["Next.js", "Shopify", "Framer Motion", "Node.js", "WebSocket", "Twilio"],
    images: {
      hero: "/api/placeholder/1200/800",
      before: "/api/placeholder/600/400",
      after: "/api/placeholder/600/400"
    }
  },
  "prime-realty": {
    title: "Prime Realty Platform",
    timeline: "28 days for full marketplace launch",
    hero: {
      subtitle: "Next-generation real estate marketplace",
      description: "Built a comprehensive property marketplace with virtual tours, advanced search, agent CRM, and lead management for one of Mumbai's leading real estate agencies."
    },
    challenge: {
      title: "The Challenge",
      content: "Prime Realty needed to modernize their property listings platform to compete with large aggregators. They required advanced search capabilities, virtual tour integration, and a robust CRM system for their agents while maintaining fast load times with hundreds of property listings."
    },
    solution: {
      title: "Our Solution",
      points: [
        "Advanced search with 20+ filters and map integration",
        "Virtual tour integration with 360° viewing",
        "Agent CRM with lead tracking and follow-up automation",
        "Mobile-optimized property cards with lazy loading",
        "Comparison tool for side-by-side property analysis",
        "Automated property alerts and saved searches"
      ]
    },
    results: {
      title: "Results That Matter",
      metrics: [
        { label: "Properties Listed", value: "500+", description: "Active listings managed" },
        { label: "Lead Generation", value: "+220%", description: "Increase in qualified leads" },
        { label: "Page Load Time", value: "1.2s", description: "Lightning-fast performance" },
        { label: "Mobile Users", value: "72%", description: "Mobile-first success" }
      ]
    },
    techStack: ["React", "TypeScript", "PostgreSQL", "Google Maps API", "Redis", "AWS"],
    images: {
      hero: "/api/placeholder/1200/800",
      before: "/api/placeholder/600/400",
      after: "/api/placeholder/600/400"
    }
  },
  "corporate-consulting": {
    title: "Apex Corporate Consulting",
    timeline: "18 days for complete website",
    hero: {
      subtitle: "Professional corporate presence that converts",
      description: "Designed and developed a premium corporate website for a management consulting firm, featuring service portfolios, case studies, team profiles, and integrated scheduling system."
    },
    challenge: {
      title: "The Challenge",
      content: "Apex Corporate needed to establish credibility with international clients while showcasing their expertise. Their old website was outdated and failed to convey their premium positioning or generate quality leads from high-value clients."
    },
    solution: {
      title: "Our Solution",
      points: [
        "Premium design with subtle animations and micro-interactions",
        "Detailed service pages with case study integration",
        "Team profiles with expertise highlighting",
        "Integrated Calendly for consultation bookings",
        "Resource center with downloadable insights",
        "Multi-language support for international reach"
      ]
    },
    results: {
      title: "Results That Matter",
      metrics: [
        { label: "Conversion Rate", value: "42%", description: "Contact form submissions" },
        { label: "International Clients", value: "+156%", description: "Overseas inquiries" },
        { label: "Time on Site", value: "4.5 min", description: "Average session duration" },
        { label: "Brand Perception", value: "Premium", description: "Elevated market position" }
      ]
    },
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful CMS", "Calendly API"],
    images: {
      hero: "/api/placeholder/1200/800",
      before: "/api/placeholder/600/400",
      after: "/api/placeholder/600/400"
    }
  },
  "heritage-jewels": {
    title: "Heritage Jewels 3D Store",
    timeline: "35 days including 3D integration",
    hero: {
      subtitle: "Luxury jewelry shopping with immersive 3D experience",
      description: "Created a cutting-edge e-commerce platform for high-end jewelry with interactive 3D product viewer, AR try-on capabilities, and secure payment integration for Heritage Jewels."
    },
    challenge: {
      title: "The Challenge",
      content: "Heritage Jewels wanted to sell luxury jewelry online but faced the challenge of showcasing intricate details and building trust for high-value purchases. They needed an immersive digital experience that could replicate the in-store premium feel and allow customers to examine pieces from every angle."
    },
    solution: {
      title: "Our Solution",
      points: [
        "Interactive 3D viewer with 360° rotation and zoom",
        "AR try-on feature for rings, necklaces, and earrings",
        "High-resolution image galleries with macro detail shots",
        "Secure checkout with multiple payment options",
        "Virtual consultation booking with jewelry experts",
        "Wishlist and gift registry functionality"
      ]
    },
    results: {
      title: "Results That Matter",
      metrics: [
        { label: "User Engagement", value: "+300%", description: "Time spent viewing products" },
        { label: "3D Interactions", value: "87%", description: "Users engaging with 3D viewer" },
        { label: "Cart Value", value: "+145%", description: "Average order increase" },
        { label: "Trust Score", value: "4.9/5", description: "Customer confidence rating" }
      ]
    },
    techStack: ["React", "Three.js", "Shopify", "AR SDK", "WebGL", "Stripe"],
    images: {
      hero: "/api/placeholder/1200/800",
      before: "/api/placeholder/600/400",
      after: "/api/placeholder/600/400"
    }
  },
  "logistics-dashboard": {
    title: "FleetTrack Logistics SaaS",
    timeline: "42 days for MVP dashboard",
    hero: {
      subtitle: "Real-time fleet management and route optimization",
      description: "Developed a comprehensive SaaS dashboard for logistics companies, featuring real-time GPS tracking, route optimization, driver management, and automated reporting capabilities."
    },
    challenge: {
      title: "The Challenge",
      content: "FleetTrack's clients needed a modern solution to manage multiple vehicles, optimize routes, and reduce operational costs. The system had to handle real-time data from hundreds of vehicles, provide instant insights, and work seamlessly across devices for fleet managers on the go."
    },
    solution: {
      title: "Our Solution",
      points: [
        "Real-time GPS tracking with live map visualization",
        "AI-powered route optimization for fuel efficiency",
        "Driver performance monitoring and scoring",
        "Automated delivery confirmations with photo evidence",
        "Multi-tenant architecture for different client accounts",
        "Custom reporting with export capabilities"
      ]
    },
    results: {
      title: "Results That Matter",
      metrics: [
        { label: "Efficiency Boost", value: "40%", description: "Operational cost reduction" },
        { label: "Real-time Updates", value: "<2s", description: "Data refresh latency" },
        { label: "Client Adoption", value: "95%", description: "Driver app usage rate" },
        { label: "Scalability", value: "Multi-tenant", description: "100+ client companies" }
      ]
    },
    techStack: ["React", "TypeScript", "WebSocket", "Node.js", "MongoDB", "Redis"],
    images: {
      hero: "/api/placeholder/1200/800",
      before: "/api/placeholder/600/400",
      after: "/api/placeholder/600/400"
    }
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
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{study.timeline}</span>
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

        {/* Results Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
                {study.results.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {study.results.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="glass-effect-strong rounded-xl p-6 text-center space-y-3 hover-glow"
                  >
                    <div className="text-4xl font-bold text-primary glow-text">
                      {metric.value}
                    </div>
                    <div className="font-semibold text-foreground">
                      {metric.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
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
