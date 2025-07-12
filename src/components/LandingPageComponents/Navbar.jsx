import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ scrollY, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-black/80 backdrop-blur-xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
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

          {/* Mobile Menu Button */}
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
  );
};

export default Navbar;
