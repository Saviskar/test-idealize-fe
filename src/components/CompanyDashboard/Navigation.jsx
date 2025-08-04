import React from "react";
import { useState } from "react";
import { Plus, Upload, Users, Settings, BarChart3, List } from "lucide-react";

const sidebarItems = [
  { icon: BarChart3, label: "Overview", key: "overview" },
  { icon: Plus, label: "Add Task", key: "add-task" },
  { icon: List, label: "Task List", key: "task-list" },
  { icon: Users, label: "Interns List", key: "interns-list" },
  { icon: Upload, label: "Submissions Page", key: "submissions" },
  { icon: Settings, label: "Settings", key: "settings" },
];

function Navigation() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <>
      <div className="flex-1 overflow-y-auto p-6">
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item.key
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Navigation;
