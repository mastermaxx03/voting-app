import React, { useState } from "react";
import Alert from "../../components/common/Alert";
import { SparklesIcon } from "../../components/icons";
import { formatDateTimeIST } from "../../utils/dateUtils";

export const PollResults = ({ route, setRoute, polls }) => {
  if (!route?.pollId) {
    return <p>Invalid route: Poll ID missing.</p>;
  }

  const poll = polls.find((p) => p.id === route.pollId);

  if (!poll) {
    return <p>Poll not found. Please go back to the dashboard.</p>;
  }

  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });

  // Calculate weighted results for each question option
  const calculateResults = () => {
    if (!poll.questions || !poll.votes || !poll.voters) return {};

    const results = {};
    poll.questions.forEach((question) => {
      results[question.id] = {};

      (question.enabledOptions || question.options || []).forEach((opt) => {
        results[question.id][opt] = 0;
      });

      poll.votes
        .filter((v) => v.questionId === question.id)
        .forEach((vote) => {
          const voter = poll.voters.find((vtr) => vtr.id === vote.voterId);
          if (voter && results[question.id].hasOwnProperty(vote.option)) {
            const weight = poll.settings?.weightedVotes
              ? parseFloat(voter.weight) || 1
              : 1;
            results[question.id][vote.option] += weight;
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
    setAlert({ message: "", type: "" });

    try {
      // TODO: Implement call to Gemini AI API or other service
      // Simulation delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSummary("Summary generation is not implemented yet.");
    } catch (error) {
      setAlert({ message: "Failed to generate summary.", type: "error" });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{poll.title}</h2>
        <p className="text-sm text-gray-600">
          Voting Window: {formatDateTimeIST(poll.startTime)} &rarr;{" "}
          {formatDateTimeIST(poll.endTime)}
        </p>
        <p className="text-sm text-gray-600">Total Voters: {totalVoters}</p>
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
        {poll.questions.map((q, index) => (
          <div key={q.id} className="p-6 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-gray-800 mb-4">
              Q{index + 1}: "{q.text}"
            </h3>
            <ul>
              {(q.enabledOptions || q.options || []).map((opt) => (
                <li key={opt} className="flex justify-between">
                  <span>{opt}</span>
                  <span>
                    {results[q.id]?.[opt] !== undefined
                      ? results[q.id][opt].toFixed(2)
                      : "0"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setRoute({ page: "adminDashboard" })}
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          &larr; Back to Dashboard
        </button>
        <button
          onClick={handleGenerateSummary}
          disabled={isGenerating}
          className="flex items-center space-x-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-purple-300"
        >
          <SparklesIcon />
          <span>{isGenerating ? "Generating..." : "✨ Generate Summary"}</span>
        </button>
      </div>
    </div>
  );
};

export default PollResults;
