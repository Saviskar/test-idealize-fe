// src/components/HeroSection.jsx
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-8">
            🚀 Now in Beta - Join the Future of Work
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Connect.
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Experience.
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Grow.
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/80 font-light">
          The revolutionary micro-internship platform connecting students with
          companies for short-term, fully remote opportunities — where talent
          meets opportunity without barriers.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group relative overflow-hidden bg-white text-black px-10 py-5 text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
            <span className="relative z-10 flex items-center justify-center">
              Join as Student
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </span>
          </button>
          <button className="group relative overflow-hidden border-2 border-white text-white px-10 py-5 text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-2xl">
            <span className="relative z-10 flex items-center justify-center">
              Post Internship
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
