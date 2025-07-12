import React, { useState } from "react";
import {
  ArrowRight,
  User,
  Mail,
  MapPin,
  Building,
  Calendar,
  CreditCard,
  Users,
} from "lucide-react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    province: "",
    postalCode: "",
    university: "",
    age: "",
    nicNumber: "",
    sex: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Registration submitted:", formData);
    // Handle form submission logic here
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const provinces = [
    "Western Province",
    "Central Province",
    "Southern Province",
    "Northern Province",
    "Eastern Province",
    "North Western Province",
    "North Central Province",
    "Uva Province",
    "Sabaragamuwa Province",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-2xl w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              MIX
            </span>
          </h2>
          <p className="text-lg text-white/70 font-light">
            Create your profile and unlock amazing opportunities
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-20 h-1 mx-4 rounded-full transition-all duration-300 ${
                      step < currentStep
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-white/10"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mb-6">
            <span className="text-white/60 text-sm">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Personal Information
                  </h3>
                  <p className="text-white/60">Tell us about yourself</p>
                </div>

                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                      size={20}
                    />
                    <input
                      type="number"
                      name="age"
                      placeholder="Age"
                      value={formData.age}
                      onChange={handleInputChange}
                      min="16"
                      max="100"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Users
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                      size={20}
                    />
                    <select
                      name="sex"
                      value={formData.sex}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 appearance-none"
                      required
                    >
                      <option value="" className="bg-gray-800">
                        Select Gender
                      </option>
                      <option value="male" className="bg-gray-800">
                        Male
                      </option>
                      <option value="female" className="bg-gray-800">
                        Female
                      </option>
                      <option value="other" className="bg-gray-800">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <CreditCard
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    name="nicNumber"
                    placeholder="NIC Number"
                    value={formData.nicNumber}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Location Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Location Details
                  </h3>
                  <p className="text-white/60">Where are you located?</p>
                </div>

                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 appearance-none"
                    required
                  >
                    <option value="" className="bg-gray-800">
                      Select Province
                    </option>
                    {provinces.map((province) => (
                      <option
                        key={province}
                        value={province}
                        className="bg-gray-800"
                      >
                        {province}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Education Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Education Details
                  </h3>
                  <p className="text-white/60">Tell us about your education</p>
                </div>

                <div className="relative">
                  <Building
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    name="university"
                    placeholder="University or School Name"
                    value={formData.university}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Summary Card */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Registration Summary
                  </h4>
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="text-white">
                        {formData.fullName || "Not provided"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="text-white">
                        {formData.email || "Not provided"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="text-white">
                        {formData.city && formData.province
                          ? `${formData.city}, ${formData.province}`
                          : "Not provided"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>University:</span>
                      <span className="text-white">
                        {formData.university || "Not provided"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  Previous
                </button>
              )}

              <div className="flex-1"></div>

              {currentStep < totalSteps ? (
                <button
                  onClick={nextStep}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 text-lg font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Next
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 text-lg font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Complete Registration
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
