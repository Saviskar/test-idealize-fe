import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ value, onChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Lock
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
        size={20}
      />
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder="Password"
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
