import React, { useState } from "react";

// This component displays the ballot to the voter and allows voting on questions.
const VoterBallot = ({ route, setRoute, polls, setPolls, auth }) => {
  const poll = polls.find((p) => p.id === route.pollId);
  const voterId = route.voterId;

  const [votes, setVotes] = useState(() => {
    // Initialize votes as empty or existing if available
    const initialVotes = {};
    if (poll && poll.questions) {
      poll.questions.forEach((q) => {
        initialVotes[q.id] = null; // no option selected yet
      });
    }
    return initialVotes;
  });

  if (!poll) {
    return <p>Poll not found. Please return to dashboard.</p>;
  }

  const handleOptionChange = (questionId, option) => {
    setVotes((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    // Validate all questions answered (or allow skip if enabled)
    if (!poll.settings.allowSkip) {
      const unanswered = poll.questions.some(
        (q) => !votes[q.id] || votes[q.id] === null
      );
      if (unanswered) {
        alert("Please answer all questions before submitting.");
        return;
      }
    }
    // TODO: Connect with backend API for vote submission
    alert("Vote submitted (mock). Thank you!");

    setRoute({ page: "voterConfirmation" });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{poll.title}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {poll.questions.map((q, idx) => (
          <div key={q.id} className="mb-6">
            <h3 className="font-semibold mb-2">
              {idx + 1}. {q.text}
            </h3>
            {(q.enabledOptions || q.options || []).map((opt) => (
              <label key={opt} className="block mb-1 cursor-pointer">
                <input
                  type="radio"
                  name={`question_${q.id}`}
                  value={opt}
                  checked={votes[q.id] === opt}
                  onChange={() => handleOptionChange(q.id, opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        ))}

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => setRoute({ page: "home" })}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
          >
            Submit Vote
          </button>
        </div>
      </form>
    </div>
  );
};

export default VoterBallot;
