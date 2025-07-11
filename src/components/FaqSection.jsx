import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a micro-internship?",
      answer:
        "A micro-internship is a short-term, project-based work experience that typically lasts 1–4 weeks. It's designed to give students real-world experience while helping companies complete specific projects or evaluate potential talent.",
    },
    {
      question: "Is MIX really completely free?",
      answer:
        "Yes! MIX is 100% free for both students and companies. There are no hidden fees, subscription costs, or commission charges. We believe in removing barriers to opportunity.",
    },
    {
      question: "How long are typical internships on MIX?",
      answer:
        "Most micro-internships on MIX range from 1–4 weeks, though some projects may extend up to 8 weeks. The short duration allows for maximum flexibility while still providing meaningful experience.",
    },
    {
      question:
        "Can companies hire students full-time after a micro-internship?",
      answer:
        "Absolutely! Many companies use micro-internships as a way to evaluate potential full-time hires. It's a great way to test compatibility and skills before making longer-term commitments.",
    },
    {
      question: "What kind of work can be done remotely?",
      answer:
        "Our platform supports a wide range of remote work including software development, digital marketing, content creation, data analysis, design, research, and many other knowledge-based tasks.",
    },
  ];

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
            Got Questions?
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            FAQ
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left font-bold text-lg flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6 border-t border-white/10">
                    <p className="text-white/70 pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
