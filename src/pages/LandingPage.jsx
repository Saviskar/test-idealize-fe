import React, { useState, useEffect } from "react";
import AnimatedBackground from "../components/LandingPageComponents/AnimatedBackground";
import Navbar from "../components/LandingPageComponents/Navbar";
import HeroSection from "../components/LandingPageComponents/HeroSection";
import HowItWorks from "../components/LandingPageComponents/HowItWorks";
import WhyMix from "../components/LandingPageComponents/WhyMix";
import ProductDemo from "../components/LandingPageComponents/ProductDemo";
import Testimonials from "../components/LandingPageComponents/Testimonials";
import FaqSection from "../components/LandingPageComponents/FaqSection";
import FinalCTA from "../components/LandingPageComponents/FinalCTA";
import Footer from "../components/layout/Footer";

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar
        scrollY={scrollY}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSection />
      <HowItWorks />
      <WhyMix />
      <ProductDemo />
      <Testimonials />
      <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
