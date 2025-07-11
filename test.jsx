import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Users,
  Briefcase,
  Globe,
  Clock,
  Star,
  Award,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react";

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a micro-internship?",
      answer:
        "A micro-internship is a short-term, project-based work experience that typically lasts 1-4 weeks. It's designed to give students real-world experience while helping companies complete specific projects or evaluate potential talent.",
    },
    {
      question: "Is MIX really completely free?",
      answer:
        "Yes! MIX is 100% free for both students and companies. There are no hidden fees, subscription costs, or commission charges. We believe in removing barriers to opportunity.",
    },
    {
      question: "How long are typical internships on MIX?",
      answer:
        "Most micro-internships on MIX range from 1-4 weeks, though some projects may extend up to 8 weeks. The short duration allows for maximum flexibility while still providing meaningful experience.",
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-black/80 backdrop-blur-xl border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              MIX
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#how-it-works"
                className="text-white/80 hover:text-white transition-all duration-300 font-medium tracking-wide"
              >
                How It Works
              </a>
              <a
                href="#why-mix"
                className="text-white/80 hover:text-white transition-all duration-300 font-medium tracking-wide"
              >
                Why MIX
              </a>
              <a
                href="#faq"
                className="text-white/80 hover:text-white transition-all duration-300 font-medium tracking-wide"
              >
                FAQ
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/20">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#how-it-works"
                className="block text-white/80 hover:text-white transition-colors font-medium"
              >
                How It Works
              </a>
              <a
                href="#why-mix"
                className="block text-white/80 hover:text-white transition-colors font-medium"
              >
                Why MIX
              </a>
              <a
                href="#faq"
                className="block text-white/80 hover:text-white transition-colors font-medium"
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* How It Works */}
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
            {/* For Students */}
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <div className="p-3 bg-white/10 rounded-2xl mr-4 group-hover:bg-white/20 transition-colors">
                    <Users size={32} />
                  </div>
                  For Students
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group/item">
                    <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover/item:scale-110 transition-transform">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">Sign Up Free</h4>
                      <p className="text-white/70 leading-relaxed">
                        Create your profile and showcase your skills, interests,
                        and availability with our intuitive onboarding.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group/item">
                    <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover/item:scale-110 transition-transform">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">Browse & Apply</h4>
                      <p className="text-white/70 leading-relaxed">
                        Discover micro-internships that match your goals and
                        apply with our streamlined one-click process.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group/item">
                    <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover/item:scale-110 transition-transform">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">
                        Gain Experience
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        Complete impactful projects, build your portfolio, and
                        receive valuable feedback from industry professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* For Companies */}
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <div className="p-3 bg-white/10 rounded-2xl mr-4 group-hover:bg-white/20 transition-colors">
                    <Briefcase size={32} />
                  </div>
                  For Companies
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group/item">
                    <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover/item:scale-110 transition-transform">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">Post Projects</h4>
                      <p className="text-white/70 leading-relaxed">
                        Define your micro-internship project and requirements in
                        minutes with our smart posting system.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group/item">
                    <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover/item:scale-110 transition-transform">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">
                        Review Applications
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        Browse pre-qualified candidates and select the perfect
                        match using our AI-powered recommendation engine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group/item">
                    <div className="bg-gradient-to-r from-white to-gray-300 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover/item:scale-110 transition-transform">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">
                        Collaborate & Evaluate
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        Work with exceptional talent and discover your next
                        full-time hire through our integrated collaboration
                        tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MIX */}
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
            {[
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
                desc: "1-4 week projects designed to fit seamlessly around your schedule and commitments.",
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
            ].map((item, index) => (
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

      {/* Product Demo */}
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
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="mr-3" size={24} />
                  Student Dashboard
                </h3>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl h-80 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4"></div>
                    <span className="text-white/60 font-medium">
                      Interactive Profile & Application Management
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Company Portal
                </h3>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl h-80 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4"></div>
                    <span className="text-white/60 font-medium">
                      Advanced Posting & Candidate Management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            {[
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
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mr-4"></div>
                    <div>
                      <div className="font-bold text-lg">
                        {testimonial.name}
                      </div>
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

      {/* FAQ Section */}
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

      {/* Final CTA */}
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

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                MIX
              </h3>
              <p className="text-white/70 leading-relaxed">
                Connecting talent with opportunity, one micro-internship at a
                time. Building the future of work today.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm border border-white/10 hover:border-white/30"></div>
                <div className="w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm border border-white/10 hover:border-white/30"></div>
                <div className="w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm border border-white/10 hover:border-white/30"></div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>
              &copy; 2025 MIX. All rights reserved. Built with ❤️ for the future
              of work.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
