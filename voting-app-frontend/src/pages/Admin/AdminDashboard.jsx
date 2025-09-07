import React from "react";
import { formatDateTimeIST } from "../../utils/dateUtils";
import { EditIcon, ViewIcon } from "../../components/icons";

// WF-03: Admin Dashboard Home
const AdminDashboard = ({ setRoute, polls, setPolls }) => {
  const handleAction = (poll) => {
    if (poll.status === "DRAFT") {
      setRoute({ page: "createPoll", step: 1, pollId: poll.id });
    } else if (poll.status === "OPEN" || poll.status === "EXTENDED") {
      setRoute({ page: "livePollDashboard", pollId: poll.id });
    } else if (poll.status === "CLOSED") {
      setRoute({ page: "pollResults", pollId: poll.id });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => setRoute({ page: "createPoll", step: 1 })}
          className="bg-blue-500 text-white font-bold py-4 px-6 rounded-lg shadow hover:bg-blue-600 transition text-left"
        >
          Create New Poll
        </button>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-gray-700">Voter Lists</h3>
          <p className="text-sm text-gray-500">Manage voter lists per poll.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-gray-700">Poll Results</h3>
          <p className="text-sm text-gray-500">View results of closed polls.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-800 p-6">My Polls</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Window (IST)</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {polls.map((poll) => (
                <tr
                  key={poll.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {poll.title}
                  </td>
                  <td className="px-6 py-4">{poll.type}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        poll.status === "OPEN"
                          ? "bg-green-100 text-green-800"
                          : poll.status === "DRAFT"
                          ? "bg-yellow-100 text-yellow-800"
                          : poll.status === "CLOSED"
                          ? "bg-gray-200 text-gray-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {poll.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {formatDateTimeIST(poll.startTime)} &rarr;{" "}
                    {formatDateTimeIST(poll.endTime)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleAction(poll)}
                      className="font-medium text-blue-600 hover:underline flex items-center space-x-1"
                    >
                      {poll.status === "DRAFT" ? <EditIcon /> : <ViewIcon />}
                      <span>{poll.status === "DRAFT" ? "Edit" : "View"}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
