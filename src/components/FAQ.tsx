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
    <section id="faq" className="section-spacing container-padding relative">
      {/* Professional Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
            FAQ
          </div>
          
          <h2 className="heading-secondary glow-text mb-6 text-balance">
            Questions & <span className="text-primary">Answers</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-balance">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect-strong rounded-2xl overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <h3 className="text-base md:text-lg font-bold pr-4 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 ${openIndex === index ? 'bg-primary/20' : ''}`}>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
