import React from "react";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-8">
            Ready to Start?
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Your Journey Starts Here
          </h2>
          <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students and companies already transforming the
            future of work through micro-internships.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden bg-white text-black px-12 py-6 text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10 flex items-center justify-center">
                Get Started Free
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </span>
            </button>
            <button className="group relative overflow-hidden border-2 border-white text-white px-12 py-6 text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-2xl">
              <span className="relative z-10 flex items-center justify-center">
                Post an Internship
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
