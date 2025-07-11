import React from "react";
import { Zap, Shield } from "lucide-react";

const ProductDemo = () => {
  const demos = [
    {
      title: "Student Dashboard",
      icon: <Zap className="mr-3" size={24} />,
      description: "Interactive Profile & Application Management",
    },
    {
      title: "Company Portal",
      icon: <Shield className="mr-3" size={24} />,
      description: "Advanced Posting & Candidate Management",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
            Platform Preview
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            See MIX in Action
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {demos.map((demo, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  {demo.icon}
                  {demo.title}
                </h3>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl h-80 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4"></div>
                    <span className="text-white/60 font-medium">
                      {demo.description}
                    </span>
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

export default ProductDemo;
