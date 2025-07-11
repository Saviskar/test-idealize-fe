import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
    </div>
  );
};

export default AnimatedBackground;
