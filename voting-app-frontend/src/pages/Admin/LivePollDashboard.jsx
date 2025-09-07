import React from "react";

// Dashboard page to view live/open poll details and status
const LivePollDashboard = ({ setRoute, route, polls, setPolls }) => {
  const poll = polls.find((p) => p.id === route.pollId);

  if (!poll) {
    return (
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        <p className="text-center text-gray-600">Poll not found.</p>
        <button
          onClick={() => setRoute({ page: "adminDashboard" })}
          className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">{poll.title}</h2>
      <p className="mb-4 text-gray-700">Status: {poll.status}</p>
      {/* Placeholder for live poll details like votes counted, time remaining, etc. */}
      <p className="text-gray-500 italic">
        Live poll dashboard details will be implemented here.
      </p>

      <button
        onClick={() => setRoute({ page: "adminDashboard" })}
        className="mt-6 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default LivePollDashboard;
