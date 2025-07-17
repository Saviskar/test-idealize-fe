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

  const renderAddTaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [assignedInterns, setAssignedInterns] = useState([]);

    const handleAddTag = (e) => {
      e.preventDefault();
      if (tagInput.trim() && !tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    };

    const handleRemoveTag = (tagToRemove) => {
      setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = {
        title,
        description,
        deadline,
        tags,
        assignedInterns,
      };
      console.log("Task Submitted:", newTask);
      // You can POST this data to your backend here.
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-white">Add New Task</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 space-y-6"
        >
          <div>
            <label className="block text-gray-300 mb-2">Task Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task title"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Task Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
              className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task description"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Deadline</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Category / Skill Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-red-400 hover:text-red-500"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="flex-1 bg-gray-900 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a tag"
              />
              <button
                onClick={handleAddTag}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Assign to Intern(s)
            </label>
            <select
              multiple
              value={assignedInterns}
              onChange={(e) =>
                setAssignedInterns(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {interns.map((intern) => (
                <option key={intern.id} value={intern.name}>
                  {intern.name} ({intern.department})
                </option>
              ))}
            </select>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg text-white hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    );
  };

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

  const renderAddTask = () => {
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      deliverables: [""],
      deadline: "",
      category: "",
      difficulty: "Intermediate",
      skillsTags: [],
      assignedInterns: [],
      priority: "Medium",
      estimatedTime: "",
    });

    const [newSkill, setNewSkill] = useState("");
    const [showSkillInput, setShowSkillInput] = useState(false);

    const categories = [
      { id: "development", name: "Development & Programming", icon: Code },
      { id: "marketing", name: "Marketing & Social Media", icon: Share2 },
      { id: "design", name: "Design & UI/UX", icon: Target },
      { id: "content", name: "Content Creation", icon: FileText },
      { id: "research", name: "Research & Analysis", icon: Brain },
      { id: "other", name: "Other", icon: MoreHorizontal },
    ];

    const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];
    const priorityLevels = ["Low", "Medium", "High", "Critical"];

    const availableSkills = [
      "JavaScript",
      "React",
      "Python",
      "Node.js",
      "HTML/CSS",
      "SQL",
      "MongoDB",
      "Social Media Marketing",
      "Content Writing",
      "SEO",
      "Graphic Design",
      "Data Analysis",
      "Project Management",
      "Communication",
      "Research",
    ];

    const handleInputChange = (field, value) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

    const handleDeliverableChange = (index, value) => {
      const newDeliverables = [...formData.deliverables];
      newDeliverables[index] = value;
      setFormData((prev) => ({
        ...prev,
        deliverables: newDeliverables,
      }));
    };

    const addDeliverable = () => {
      setFormData((prev) => ({
        ...prev,
        deliverables: [...prev.deliverables, ""],
      }));
    };

    const removeDeliverable = (index) => {
      const newDeliverables = formData.deliverables.filter(
        (_, i) => i !== index
      );
      setFormData((prev) => ({
        ...prev,
        deliverables: newDeliverables.length > 0 ? newDeliverables : [""],
      }));
    };

    const addSkill = (skill) => {
      if (skill && !formData.skillsTags.includes(skill)) {
        setFormData((prev) => ({
          ...prev,
          skillsTags: [...prev.skillsTags, skill],
        }));
      }
      setNewSkill("");
      setShowSkillInput(false);
    };

    const removeSkill = (skillToRemove) => {
      setFormData((prev) => ({
        ...prev,
        skillsTags: prev.skillsTags.filter((skill) => skill !== skillToRemove),
      }));
    };

    const toggleInternAssignment = (internId) => {
      setFormData((prev) => ({
        ...prev,
        assignedInterns: prev.assignedInterns.includes(internId)
          ? prev.assignedInterns.filter((id) => id !== internId)
          : [...prev.assignedInterns, internId],
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would typically send the data to your backend
      console.log("Task Data:", formData);
      alert("Task created successfully!");
    };

    const selectedCategory = categories.find(
      (cat) => cat.id === formData.category
    );

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Create New Task
          </h2>
          <p className="text-gray-400">
            Fill out the details below to create a new task for your interns
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Task Title */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
            <label className="block text-white font-semibold mb-3">
              Task Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Enter a clear, descriptive task title"
              required
            />
          </div>

          {/* Task Description */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
            <label className="block text-white font-semibold mb-3">
              Task Description <span className="text-red-400">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows="4"
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Provide a detailed description of what needs to be accomplished"
              required
            />
          </div>

          {/* Deliverables */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
            <label className="block text-white font-semibold mb-3">
              Deliverables <span className="text-red-400">*</span>
            </label>
            <div className="space-y-3">
              {formData.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-1 flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-400 text-sm">{index + 1}</span>
                    </div>
                    <input
                      type="text"
                      value={deliverable}
                      onChange={(e) =>
                        handleDeliverableChange(index, e.target.value)
                      }
                      className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Describe what should be delivered"
                      required
                    />
                  </div>
                  {formData.deliverables.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDeliverable(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addDeliverable}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Plus size={16} />
                <span>Add Another Deliverable</span>
              </button>
            </div>
          </div>

          {/* Category & Settings Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
              <label className="block text-white font-semibold mb-3">
                Category <span className="text-red-400">*</span>
              </label>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleInputChange("category", category.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        formData.category === category.id
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                          : "text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Task Settings */}
            <div className="space-y-6">
              {/* Difficulty */}
              <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
                <label className="block text-white font-semibold mb-3">
                  Difficulty Level
                </label>
                <div className="flex space-x-2">
                  {difficultyLevels.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => handleInputChange("difficulty", level)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        formData.difficulty === level
                          ? level === "Beginner"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : level === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                          : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority */}
              <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
                <label className="block text-white font-semibold mb-3">
                  Priority
                </label>
                <div className="flex space-x-2">
                  {priorityLevels.map((priority) => (
                    <button
                      key={priority}
                      type="button"
                      onClick={() => handleInputChange("priority", priority)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        formData.priority === priority
                          ? priority === "Low"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : priority === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : priority === "High"
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                          : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600"
                      }`}
                    >
                      {priority}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deadline & Estimated Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
              <label className="block text-white font-semibold mb-3">
                Deadline <span className="text-red-400">*</span>
              </label>
              <input
                type="datetime-local"
                value={formData.deadline}
                onChange={(e) => handleInputChange("deadline", e.target.value)}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                required
              />
            </div>

            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
              <label className="block text-white font-semibold mb-3">
                Estimated Time
              </label>
              <input
                type="text"
                value={formData.estimatedTime}
                onChange={(e) =>
                  handleInputChange("estimatedTime", e.target.value)
                }
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                placeholder="e.g., 2 weeks, 3 days, 40 hours"
              />
            </div>
          </div>

          {/* Skills Tags */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
            <label className="block text-white font-semibold mb-3">
              Required Skills
            </label>

            {/* Current Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.skillsTags.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>

            {/* Available Skills */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                Select from common skills:
              </p>
              <div className="flex flex-wrap gap-2">
                {availableSkills
                  .filter((skill) => !formData.skillsTags.includes(skill))
                  .map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => addSkill(skill)}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600/50 transition-colors"
                    >
                      + {skill}
                    </button>
                  ))}
              </div>

              {/* Custom Skill Input */}
              <div className="flex items-center space-x-2">
                {showSkillInput ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      className="bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Enter custom skill"
                      onKeyPress={(e) =>
                        e.key === "Enter" &&
                        (e.preventDefault(), addSkill(newSkill))
                      }
                    />
                    <button
                      type="button"
                      onClick={() => addSkill(newSkill)}
                      className="bg-blue-500/20 text-blue-400 px-3 py-2 rounded-lg hover:bg-blue-500/30 transition-colors"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => (
                        setShowSkillInput(false), setNewSkill("")
                      )}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSkillInput(true)}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    + Add Custom Skill
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Assign to Interns */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
            <label className="block text-white font-semibold mb-3">
              Assign to Intern(s)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interns.map((intern) => (
                <button
                  key={intern.id}
                  type="button"
                  onClick={() => toggleInternAssignment(intern.id)}
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    formData.assignedInterns.includes(intern.id)
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-white"
                      : "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {intern.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{intern.name}</p>
                      <p className="text-sm opacity-75">{intern.department}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setActiveSection("task-list")}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return renderOverview();
      case "add-task":
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Add New Task</h2>
            <p className="text-gray-400">Task creation form would go here</p>
          </div>
        );
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
