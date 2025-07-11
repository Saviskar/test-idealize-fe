import React from "react";
import { Users, Briefcase } from "lucide-react";

const HowItWorks = () => {
  const stepsForStudents = [
    {
      title: "Sign Up Free",
      desc: "Create your profile and showcase your skills, interests, and availability with our intuitive onboarding.",
    },
    {
      title: "Browse & Apply",
      desc: "Discover micro-internships that match your goals and apply with our streamlined one-click process.",
    },
    {
      title: "Gain Experience",
      desc: "Complete impactful projects, build your portfolio, and receive valuable feedback from industry professionals.",
    },
  ];

  const stepsForCompanies = [
    {
      title: "Post Projects",
      desc: "Define your micro-internship project and requirements in minutes with our smart posting system.",
    },
    {
      title: "Review Applications",
      desc: "Browse pre-qualified candidates and select the perfect match using our AI-powered recommendation engine.",
    },
    {
      title: "Collaborate & Evaluate",
      desc: "Work with exceptional talent and discover your next full-time hire through our integrated collaboration tools.",
    },
  ];

  const renderStep = (step, index) => (
    <div
      key={index}
      className="flex items-start space-x-6 group/item transition-transform"
    >
      <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover/item:scale-110">
        {index + 1}
      </div>
      <div>
        <h4 className="font-bold text-xl mb-3">{step.title}</h4>
        <p className="text-white/70 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
            Simple Process
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How It Works
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Students */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <div className="p-3 bg-white/10 rounded-2xl mr-4 group-hover:bg-white/20 transition-colors">
                  <Users size={32} />
                </div>
                For Students
              </h3>
              <div className="space-y-8">
                {stepsForStudents.map((step, index) => renderStep(step, index))}
              </div>
            </div>
          </div>

          {/* Companies */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <div className="p-3 bg-white/10 rounded-2xl mr-4 group-hover:bg-white/20 transition-colors">
                  <Briefcase size={32} />
                </div>
                For Companies
              </h3>
              <div className="space-y-8">
                {stepsForCompanies.map((step, index) =>
                  renderStep(step, index)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
