import React from "react";
import { useState } from "react";
import {
  MoreHorizontal,
  Code,
  Share2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const taskCategories = [
  {
    id: "development",
    title: "Development & Programming",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    tasks: [
      {
        id: 1,
        title: "Fix 5 bugs in JavaScript To-Do App",
        description: "Debug and fix issues in a JavaScript application",
        status: "In Progress",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        assignedTo: "John Doe",
      },
      {
        id: 2,
        title: "Build REST API for Inventory",
        description: "Create a Node.js API with Express framework",
        status: "New",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        assignedTo: "Jane Smith",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Social Media",
    icon: Share2,
    color: "from-pink-500 to-rose-500",
    tasks: [
      {
        id: 3,
        title: "Social Media Audit",
        description: "Analyze social media presence for small business",
        status: "Completed",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        assignedTo: "Mike Johnson",
      },
    ],
  },
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

function TaskList() {
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <>
      <div className="space-y-8">
        {taskCategories.map((category) => {
          const CategoryIcon = category.icon;
          const isCollapsed = collapsedCategories[category.id];

          return (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  >
                    <CategoryIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.tasks.length} tasks
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  {isCollapsed ? (
                    <ChevronDown size={20} className="text-gray-400" />
                  ) : (
                    <ChevronUp size={20} className="text-gray-400" />
                  )}
                </button>
              </div>

              {!isCollapsed && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${getStatusColor(
                              task.status
                            )}`}
                          ></div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(
                              task.difficulty
                            )}`}
                          >
                            {task.difficulty}
                          </span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal size={16} className="text-gray-400" />
                        </button>
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {task.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-4">
                        {task.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          👤 {task.assignedTo}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            task.status === "Completed"
                              ? "bg-green-500/20 text-green-400"
                              : task.status === "In Progress"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-purple-500/20 text-purple-400"
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TaskList;
