import React from "react";

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

function InternsList() {
  return (
    <>
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
    </>
  );
}

export default InternsList;
