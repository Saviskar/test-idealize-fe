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
        title: "Fix 5 bugs in JavaScript To-Do App (1 Week)",
        description:
          "A project about bug fixing skills in JavaScript. You need to identify and fix 5 bugs in a simple to-do application. This task will help you improve your debugging skills and understanding of JavaScript fundamentals.",
        status: "In Progress",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
      },
      {
        id: 3,
        title: "Build a REST API for Inventory Management",
        description:
          "Create a RESTful API using Node.js and Express for an inventory management system. The API should support CRUD operations for products, categories, and suppliers.",
        status: "New",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
      },
      {
        id: 4,
        title: "Fix 4 bugs in JavaScript To-Do",
        description:
          "Another debugging task focused on JavaScript fundamentals and problem-solving skills.",
        status: "In Progress",
        difficulty: "Beginner",
        estimatedTime: "3 days",
      },
      {
        id: 5,
        title: "JavaScript Fundamentals Practice",
        description:
          "Continue working on debugging tasks to strengthen your JavaScript knowledge.",
        status: "In Progress",
        difficulty: "Beginner",
        estimatedTime: "3 days",
      },
      {
        id: 6,
        title: "Advanced JavaScript Debugging",
        description:
          "Final debugging task in this series to complete your JavaScript fundamentals training.",
        status: "In Progress",
        difficulty: "Intermediate",
        estimatedTime: "5 days",
      },
      {
        id: 7,
        title: "Code Optimization Challenge",
        description:
          "Additional practice with JavaScript debugging and code optimization.",
        status: "In Progress",
        difficulty: "Intermediate",
        estimatedTime: "4 days",
      },
      {
        id: 8,
        title: "Problem-Solving Workshop",
        description:
          "More debugging practice to enhance your problem-solving abilities.",
        status: "In Progress",
        difficulty: "Beginner",
        estimatedTime: "2 days",
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
        id: 2,
        title: "Social Media Audit for a Small Business",
        description:
          "Conduct a comprehensive social media audit for a small business. Analyze their current social media presence, identify areas for improvement, and provide actionable recommendations.",
        status: "Completed",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
      },
    ],
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-500";
    case "In Progress":
      return "bg-blue-500";
    case "New":
      return "bg-purple-500";
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

const getTotalTasks = (category) => category.tasks.length;
const getCompletedTasks = (category) =>
  category.tasks.filter((task) => task.status === "Completed").length;
const getInProgressTasks = (category) =>
  category.tasks.filter((task) => task.status === "In Progress").length;

function Dashboard() {
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <>
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 p-6">
          <div className="flex items-center justify-center text-center h-40">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Welcome to
              </h1>
              <h2 className="text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                MIX
              </h2>
              <p className="text-gray-400 mt-2">Connect. Experience. Grow.</p>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-8">
            {taskCategories.map((category) => {
              const CategoryIcon = category.icon;
              const isCollapsed = collapsedCategories[category.id];

              return (
                <div key={category.id} className="space-y-4">
                  {/* Category Header */}
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
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{getTotalTasks(category)} tasks</span>
                          <span>•</span>
                          <span>{getCompletedTasks(category)} completed</span>
                          <span>•</span>
                          <span>
                            {getInProgressTasks(category)} in progress
                          </span>
                        </div>
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

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300`}
                      style={{
                        width: `${
                          (getCompletedTasks(category) /
                            getTotalTasks(category)) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>

                  {/* Tasks Grid */}
                  {!isCollapsed && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="group relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                          {/* Status and Actions */}
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
                              <MoreHorizontal
                                size={16}
                                className="text-gray-400"
                              />
                            </button>
                          </div>

                          {/* Content */}
                          <div className="space-y-4">
                            <h4 className="text-white font-semibold text-lg leading-tight">
                              {task.title}
                            </h4>

                            <p className="text-gray-300 text-sm leading-relaxed">
                              {task.description}
                            </p>

                            {/* Task Meta */}
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">
                                ⏱️ {task.estimatedTime}
                              </span>
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
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

                          {/* Hover Effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
