import React, { useState } from "react";
import {
  Plus,
  Upload,
  Users,
  Settings,
  Bell,
  Search,
  BarChart3,
  List,
} from "lucide-react";
import AddTask from "../components/CompanyDashboard/AddTask";
import OverviewStats from "../components/CompanyDashboard/OverviewStats";
import TaskList from "../components/CompanyDashboard/TaskList";
import InternsList from "../components/CompanyDashboard/InternsList";
import Submission from "../components/CompanyDashboard/Submission";
import CompSettings from "../components/CompanyDashboard/CompSettings";
import Navigation from "../components/CompanyDashboard/Navigation";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const sidebarItems = [
    { icon: BarChart3, label: "Overview", key: "overview" },
    { icon: Plus, label: "Add Task", key: "add-task" },
    { icon: List, label: "Task List", key: "task-list" },
    { icon: Users, label: "Interns List", key: "interns-list" },
    { icon: Upload, label: "Submissions Page", key: "submissions" },
    { icon: Settings, label: "Settings", key: "settings" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
      case "Approved":
        return "bg-green-500";
      case "In Progress":
      case "Pending Review":
        return "bg-blue-500";
      case "New":
        return "bg-purple-500";
      case "Active":
        return "bg-green-500";
      case "Inactive":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400";
      case "Advanced":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewStats />;
      case "add-task":
        return <AddTask />;
      case "task-list":
        return <TaskList />;
      case "interns-list":
        return <InternsList />;
      case "submissions":
        return <Submission />;
      case "settings":
        return <CompSettings />;
      default:
        return <OverviewStats />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      {/* Sidebar */}
      <div className="w-80 bg-gray-800/50 backdrop-blur-lg border-r border-gray-700/50 flex flex-col">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Admin Dashboard</h3>
              <p className="text-gray-400 text-sm">System Administrator</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-400 mt-1">
                Manage tasks, interns, and submissions
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
                <Bell size={20} className="text-gray-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
                <Search size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-y-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
