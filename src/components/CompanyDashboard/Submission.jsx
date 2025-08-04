import React from "react";
import { FileText, Eye } from "lucide-react";

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

function Submission() {
  return (
    <>
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
    </>
  );
}

export default Submission;
