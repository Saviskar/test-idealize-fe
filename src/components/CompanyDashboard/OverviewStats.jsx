import React from "react";
import {
  CheckSquare,
  Plus,
  Upload,
  Target,
  Bell,
  UserCheck,
  Activity,
  Calendar,
  Clock,
  TrendingUp,
} from "lucide-react";

const overviewStats = {
  totalTasks: 42,
  activeInterns: 15,
  pendingSubmissions: 8,
  completedTasks: 28,
};

function OverviewStats() {
  return (
    <>
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
              <span className="text-green-400 text-sm">
                +12% from last month
              </span>
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
              <span className="text-purple-400 text-sm">
                67% completion rate
              </span>
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
    </>
  );
}

export default OverviewStats;
