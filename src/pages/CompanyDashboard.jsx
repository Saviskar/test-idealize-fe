import React, { useState } from "react";
import {
  User,
  CheckSquare,
  Plus,
  Mail,
  Upload,
  Brain,
  Users,
  Target,
  MessageCircle,
  Settings,
  Bell,
  Search,
  MoreHorizontal,
  Code,
  Share2,
  Server,
  ChevronDown,
  ChevronUp,
  BarChart3,
  List,
  UserCheck,
  FileText,
  Activity,
  Calendar,
  Clock,
  TrendingUp,
  Eye,
} from "lucide-react";
import AddTask from "../components/CompanyDashboard/AddTask";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // Sample data for overview tiles
  const overviewStats = {
    totalTasks: 42,
    activeInterns: 15,
    pendingSubmissions: 8,
    completedTasks: 28,
  };

  // Sample tasks data
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

  // Sample interns data
  const interns = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      department: "Development",
      tasksAssigned: 5,
      tasksCompleted: 3,
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      department: "Marketing",
      tasksAssigned: 4,
      tasksCompleted: 2,
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      department: "Design",
      tasksAssigned: 3,
      tasksCompleted: 3,
      status: "Inactive",
    },
  ];

  // Sample submissions data
  const submissions = [
    {
      id: 1,
      taskTitle: "JavaScript Bug Fix",
      internName: "John Doe",
      submittedAt: "2024-01-15",
      status: "Pending Review",
      fileCount: 3,
    },
    {
      id: 2,
      taskTitle: "Social Media Strategy",
      internName: "Jane Smith",
      submittedAt: "2024-01-14",
      status: "Approved",
      fileCount: 5,
    },
  ];

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

  const toggleCategory = (categoryId) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Tasks</p>
              <p className="text-3xl font-bold text-white mt-1">
                {overviewStats.totalTasks}
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <CheckSquare size={24} className="text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp size={16} className="text-green-400 mr-2" />
            <span className="text-green-400 text-sm">+12% from last month</span>
          </div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Interns</p>
              <p className="text-3xl font-bold text-white mt-1">
                {overviewStats.activeInterns}
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <UserCheck size={24} className="text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Activity size={16} className="text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm">3 new this week</span>
          </div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Pending Submissions</p>
              <p className="text-3xl font-bold text-white mt-1">
                {overviewStats.pendingSubmissions}
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Clock size={24} className="text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Bell size={16} className="text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm">Needs attention</span>
          </div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Completed Tasks</p>
              <p className="text-3xl font-bold text-white mt-1">
                {overviewStats.completedTasks}
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Target size={24} className="text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Calendar size={16} className="text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm">67% completion rate</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckSquare size={16} className="text-green-400" />
            </div>
            <div>
              <p className="text-white">
                John Doe completed "JavaScript Bug Fix"
              </p>
              <p className="text-gray-400 text-sm">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Upload size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white">
                Jane Smith submitted "Social Media Strategy"
              </p>
              <p className="text-gray-400 text-sm">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Plus size={16} className="text-purple-400" />
            </div>
            <div>
              <p className="text-white">
                New task "API Development" was created
              </p>
              <p className="text-gray-400 text-sm">6 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTaskList = () => (
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
  );

  const renderInternsList = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Interns Management</h3>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          Add New Intern
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interns.map((intern) => (
          <div
            key={intern.id}
            className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {intern.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h4 className="text-white font-semibold">{intern.name}</h4>
                <p className="text-gray-400 text-sm">{intern.email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Department:</span>
                <span className="text-white">{intern.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tasks Assigned:</span>
                <span className="text-white">{intern.tasksAssigned}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tasks Completed:</span>
                <span className="text-white">{intern.tasksCompleted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Status:</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    intern.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {intern.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSubmissions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Task Submissions</h3>
        <div className="flex space-x-2">
          <button className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600 transition-colors">
            Filter
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Review All
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {submission.taskTitle}
                  </h4>
                  <p className="text-gray-400">
                    Submitted by {submission.internName}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Submitted on</p>
                  <p className="text-white">{submission.submittedAt}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    submission.status === "Approved"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {submission.status}
                </span>
                <button className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors">
                  <Eye size={16} className="inline mr-2" />
                  Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return renderOverview();
      case "add-task":
        return <AddTask />;
      // return (
      //   <div className="text-center py-20">
      //     <h2 className="text-2xl font-bold text-white mb-4">Add New Task</h2>
      //     <p className="text-gray-400">Task creation form would go here</p>
      //   </div>
      // );
      case "task-list":
        return renderTaskList();
      case "interns-list":
        return renderInternsList();
      case "submissions":
        return renderSubmissions();
      case "settings":
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
            <p className="text-gray-400">Settings panel would go here</p>
          </div>
        );
      default:
        return renderOverview();
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
