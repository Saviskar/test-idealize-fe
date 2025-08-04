import React from "react";
import { useState } from "react";
import {
  CheckSquare,
  Plus,
  Mail,
  Upload,
  Brain,
  Users,
  Target,
  User,
  MessageCircle,
} from "lucide-react";

const sidebarItems = [
  {
    category: "Task & Internship Management",
    items: [
      { icon: CheckSquare, label: "Micro Intern Tasks", key: "micro-tasks" },
      { icon: Plus, label: "Post a Micro Task", key: "post-task" },
      { icon: Mail, label: "Task Invitations", key: "invitations" },
      { icon: Upload, label: "Task Submission Center", key: "submissions" },
    ],
  },
  {
    category: "Learning & Progress",
    items: [
      { icon: Brain, label: "AI Assistant Panel", key: "ai-assistant" },
      { icon: Users, label: "Mentor Connect", key: "mentor" },
      { icon: Target, label: "Goal Tracker", key: "goals" },
      { icon: User, label: "Profile", key: "profile" },
    ],
  },
  {
    category: "Communication",
    items: [{ icon: MessageCircle, label: "Chat", key: "chat" }],
  },
];

function SidePanel() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <>
      <div className="w-80 bg-gray-800/50 backdrop-blur-lg border-r border-gray-700/50 flex flex-col">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Username</h3>
              <p className="text-gray-400 text-sm">Intern</p>
            </div>
          </div>
        </div>

        {/* component of dashboard */}
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-6">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h4 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wide">
              {section.category}
            </h4>
            <nav className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveSection(item.key)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                      activeSection === item.key
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

        {/* componenet of dashboard */}
        {/* Settings */}
        <div className="p-6 border-t border-gray-700/50">
          <button
            onClick={() => setActiveSection("settings")}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
              activeSection === "settings"
                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
            }`}
          >
            <span className="text-sm">Settings</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
