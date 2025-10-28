import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What if I don't pay after 45 days?",
    answer: "Site stays live for 7-day grace; then features get paused. Data backed up for X months. You can re-activate.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fee during trial. After signing, we bill monthly.",
  },
  {
    question: "Are there hidden fees?",
    answer: "No hidden fees — hosting, SSL, maintenance included. Additional features (shop, extra pages) billed separately.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 relative">
      {/* Neon Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our pricing and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-lg md:text-xl font-bold pr-4 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>

              {/* Decorative Line */}
              {openIndex === index && (
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
