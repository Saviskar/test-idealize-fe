import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import InternDashboard from "./pages/InternDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/idashboard" element={<InternDashboard />} />
        <Route path="/cdashboard" element={<CompanyDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
