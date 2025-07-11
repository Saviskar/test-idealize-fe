import React from "react";
import {
  CheckCircle,
  Globe,
  Clock,
  Award,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const WhyMix = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Free",
      desc: "No hidden fees, subscriptions, or commissions. Access unlimited opportunities without financial barriers.",
    },
    {
      icon: Globe,
      title: "Work from Anywhere",
      desc: "Fully remote internships mean location is never a limitation to your growth and potential.",
    },
    {
      icon: Clock,
      title: "Short-Term, Flexible",
      desc: "1–4 week projects designed to fit seamlessly around your schedule and commitments.",
    },
    {
      icon: Award,
      title: "Resume Building",
      desc: "Gain verifiable real-world experience and build a portfolio that makes you stand out to employers.",
    },
    {
      icon: TrendingUp,
      title: "Talent Discovery",
      desc: "Companies discover fresh talent while students explore career paths and unlock new opportunities.",
    },
    {
      icon: MessageCircle,
      title: "Feedback System",
      desc: "Comprehensive feedback and mentorship help both students and companies grow and improve together.",
    },
  ];

  return (
    <section id="why-mix" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
            Why Choose Us
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why MIX?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                <div className="p-4 bg-white/10 rounded-2xl w-fit mb-6 group-hover:bg-white/20 transition-colors group-hover:scale-110">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMix;
