import React, { useState, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import WhyMix from "../components/WhyMix";
import ProductDemo from "../components/ProductDemo";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
