import { Twitter, Globe } from "lucide-react"; // Globe as a Google placeholder

const SocialLoginButtons = () => (
  <div className="mt-8">
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/20" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-white/5 text-white/60">Or continue with</span>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-2 gap-4">
      {/* Google Button (using Globe icon) */}
      <button className="group relative overflow-hidden bg-white/10 border border-white/20 text-white py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
        <span className="relative z-10 flex items-center justify-center">
          <Globe className="w-5 h-5 mr-2" />
          Google
        </span>
      </button>

      {/* Twitter Button */}
      <button className="group relative overflow-hidden bg-white/10 border border-white/20 text-white py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
        <span className="relative z-10 flex items-center justify-center">
          <Twitter className="w-5 h-5 mr-2" />
          Twitter
        </span>
      </button>
    </div>
  </div>
);

export default SocialLoginButtons;
