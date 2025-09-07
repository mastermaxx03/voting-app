import React, { useState, useEffect } from "react";
import { Alert } from "../../components/common/Alert";
import { SparklesIcon } from "../../components/common/icons";
//import { callGeminiAPI } from "../../api/gemini";
import { formatDateTimeIST } from "../../utils/dateUtils";

export const PollResults = ({ route, setRoute, polls }) => {
  const poll = polls.find((p) => p.id === route.pollId); // Will be replaced by an API call
  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });

  if (!poll) return <p>Poll not found. Please go back to the dashboard.</p>;

  // This calculation logic will eventually move to the backend or be based on backend data
  const calculateResults = () => {
    const results = {};
    poll.questions.forEach((q) => {
      results[q.id] = {};
      (q.enabledOptions || q.options).forEach((opt) => {
        results[q.id][opt] = 0;
      });
      const votesForQ = (poll.votes || []).filter((v) => v.questionId === q.id);
      votesForQ.forEach((vote) => {
        const voter = poll.voters.find((v) => v.id === vote.voterId);
        if (voter && results[q.id].hasOwnProperty(vote.option)) {
          const weight = poll.settings.weightedVotes
            ? parseFloat(voter.weight)
            : 1;
          results[q.id][vote.option] += weight;
        }
      });
    });
    return results;
  };

  const results = calculateResults();
  const totalVoters = poll.voters.length;

  const handleGenerateSummary = async () => {
    setIsGenerating(true);
    setSummary("");
    // Prepare results string for prompt...
    // Call Gemini API...
    // setSummary(responseText);
    setIsGenerating(false);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{poll.title}</h2>
        {/* Header with poll details */}
      </div>

      <Alert
        message={alert.message}
        type={alert.type}
        onDismiss={() => setAlert({ message: "", type: "" })}
      />

      {summary && (
        <div className="mb-8 p-6 border rounded-lg bg-purple-50">
          <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center space-x-2">
            <SparklesIcon />
            <span>✨ AI-Generated Summary</span>
          </h3>
          <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
        </div>
      )}

      <div className="space-y-6 mb-8">
        {poll.questions.map((q, index) => {
          // Display logic for each question's results
          return (
            <div key={q.id} className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-4">
                Q{index + 1}: "{q.text}"
              </h3>
              {/* Results rendering */}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setRoute({ page: "adminDashboard" })}
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          &larr; Back to Dashboard
        </button>
        <div className="flex space-x-4">
          <button
            onClick={handleGenerateSummary}
            disabled={isGenerating}
            className="flex items-center space-x-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-purple-300"
          >
            <SparklesIcon />
            <span>
              {isGenerating ? "Generating..." : "✨ Generate Summary"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
