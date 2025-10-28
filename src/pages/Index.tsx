import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot"; // ✅ added import

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot /> {/* ✅ added your bot here, won’t affect layout */}
    </main>
  );
};

export default Index;
