import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      role: "Computer Science Student",
      quote:
        "MIX transformed my career trajectory. Three micro-internships later, I landed my dream job at a leading tech company.",
    },
    {
      name: "Alex Chen",
      role: "Tech Startup CEO",
      quote:
        "We discovered our most talented junior developer through MIX. The micro-internship format was the perfect trial period.",
    },
    {
      name: "Marcus L.",
      role: "Marketing Student",
      quote:
        "The flexibility of remote micro-internships allowed me to gain global experience while studying abroad in Tokyo.",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
            Success Stories
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Real Results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
