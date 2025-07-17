import React, { useState } from "react";
import LoginHeader from "../components/LoginPage/LoginHeader";
import TextInput from "../components/LoginPage/TextInput";
import PasswordInput from "../components/LoginPage/PasswordInput";
import UserTypeSelector from "../components/LoginPage/UserTypeSelector";
import SocialLoginButtons from "../components/LoginPage/SocialLoginButtons";
import FormToggle from "../components/LoginPage/FormToggle";
import { ArrowRight, User, Mail } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    userType: "student",
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Effects can stay here */}
      <div className="max-w-md w-full space-y-8 relative z-10">
        <LoginHeader isLogin={isLogin} />

        <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="space-y-6">
            {!isLogin && (
              <TextInput
                icon={User}
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            )}
            <TextInput
              icon={Mail}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <PasswordInput
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />

            {!isLogin && (
              <UserTypeSelector
                value={formData.userType}
                onChange={handleInputChange}
              />
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

          <FormToggle isLogin={isLogin} toggle={() => setIsLogin(!isLogin)} />
          <SocialLoginButtons />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
