import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
