import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff, User, Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    userType: "student",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              MIX
            </span>
          </h2>
          <p className="text-lg text-white/70 font-light">
            {isLogin
              ? "Sign in to continue your journey"
              : "Create your account and start connecting"}
          </p>
        </div>

        {/* Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="space-y-6">
              {!isLogin && (
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {!isLogin && (
                <div className="space-y-3">
                  <label className="text-white/80 text-sm font-medium">
                    I am a:
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="student"
                        checked={formData.userType === "student"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-500 border-white/30 focus:ring-blue-500 focus:ring-2 bg-white/10"
                      />
                      <span className="text-white/80">Student</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="company"
                        checked={formData.userType === "company"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-500 border-white/30 focus:ring-blue-500 focus:ring-2 bg-white/10"
                      />
                      <span className="text-white/80">Company</span>
                    </label>
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-500 border-white/30 focus:ring-blue-500 focus:ring-2 bg-white/10 rounded"
                    />
                    <span className="text-white/80 text-sm">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                className="group relative overflow-hidden w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 text-lg font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Toggle Form */}
            <div className="mt-8 text-center">
              <p className="text-white/70">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-white font-semibold hover:text-white/80 transition-colors"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/5 text-white/60">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="group relative overflow-hidden bg-white/10 border border-white/20 text-white py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </span>
                </button>
                <button className="group relative overflow-hidden bg-white/10 border border-white/20 text-white py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
