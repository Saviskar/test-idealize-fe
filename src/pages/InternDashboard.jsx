import React, { useState } from "react";
import SidePanel from "../components/InternDashboard/SidePanel";
import Dashboard from "../components/InternDashboard/Dashboard";

const InternDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      {/* dashboard */}
      <SidePanel />

      {/* Main Content */}
      <Dashboard />
    </div>
  );
};

export default InternDashboard;
