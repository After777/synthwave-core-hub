import ChatBot from "@/components/ChatBot";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot /> {/* 👈 chatbot appears at bottom */}
    </main>
  );
};

export default Index;
