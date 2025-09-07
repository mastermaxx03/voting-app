import React, { useState } from "react";
import { VoterLists } from "./VoterLists.jsx";
import Alert from "../../components/common/Alert.jsx";
import { PlusIcon } from "../../components/icons";
import {
  formatDateForInput,
  formatTimeForInput,
} from "../../utils/dateUtils.js";

export const CreatePoll = ({ setRoute, route, polls, setPolls, auth }) => {
  const { step = 1, pollId } = route;
  const isEditing = pollId != null;

  // Initialize poll state either from existing or blank
  const [poll, setPoll] = useState(
    isEditing ? polls.find((p) => p.id === pollId) || emptyPoll() : emptyPoll()
  );

  const [localAlert, setLocalAlert] = useState({ message: "", type: "" });

  function emptyPoll() {
    return {
      title: "",
      type: "Custom",
      questions: [
        {
          id: Date.now(),
          text: "",
          options: ["Approve", "Reject", "Abstain"],
          enabledOptions: ["Approve", "Reject", "Abstain"],
        },
      ],
      settings: { allowSkip: false, weightedVotes: true },
      voters: [],
    };
  }

  // Placeholder save draft function
  const savePollDraft = async () => {
    try {
      // TODO: Implement API call here to save poll draft in backend
      setLocalAlert({ message: "Draft saved successfully.", type: "success" });
    } catch (error) {
      setLocalAlert({ message: "Failed to save draft.", type: "error" });
    }
  };

  // Placeholder open poll function
  const openPollAndInvite = async () => {
    try {
      // TODO: Implement API call to open poll and send invites
      setLocalAlert({
        message: "Poll opened and invitations will be sent.",
        type: "success",
      });
    } catch (error) {
      setLocalAlert({ message: "Failed to open poll.", type: "error" });
    }
  };

  // Navigation helpers
  const handleNext = () => setRoute({ ...route, step: step + 1 });
  const handleBack = () => setRoute({ ...route, step: step - 1 });

  // Generic poll field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPoll((prev) => ({ ...prev, [name]: value }));
  };

  // Date/time changer for start/end times
  const handleDateTimeChange = (field, part, value) => {
    const existingDate = poll[field] ? new Date(poll[field]) : new Date();
    let newDate = formatDateForInput(existingDate);
    let newTime = formatTimeForInput(existingDate);

    if (part === "date") newDate = value;
    if (part === "time") newTime = value;

    setPoll((prev) => ({ ...prev, [field]: `${newDate}T${newTime}` }));
  };

  // Add a new blank question
  const addQuestion = () => {
    setPoll((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          id: Date.now(),
          text: "",
          options: ["Approve", "Reject", "Abstain"],
          enabledOptions: ["Approve", "Reject", "Abstain"],
        },
      ],
    }));
  };

  // Change text of a question
  const handleQuestionTextChange = (id, text) => {
    setPoll((prev) => ({
      ...prev,
      questions: prev.questions.map((q) => (q.id === id ? { ...q, text } : q)),
    }));
  };

  // Stepper UI
  const Stepper = () => (
    <div className="mb-8 flex items-center justify-center space-x-4">
      {["Basics", "Questions", "Settings & Voters"].map((s, i) => (
        <React.Fragment key={s}>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {i + 1}
            </div>
            <span
              className={`ml-2 font-medium ${
                step >= i + 1 ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {s}
            </span>
          </div>
          {i < 2 && <div className="flex-1 h-px bg-gray-300"></div>}
        </React.Fragment>
      ))}
    </div>
  );

  // Step 1: Basics
  const CreatePollStep1 = ({
    poll,
    handleChange,
    handleDateTimeChange,
    onNext,
    setRoute,
  }) => (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Step 1: Poll Basics
      </h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title of the Poll
          </label>
          <input
            type="text"
            name="title"
            value={poll.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Election Type
          </label>
          <div className="flex flex-wrap gap-4">
            {["Custom", "Insolvency", "Shareholder", "Auction"].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={poll.type === type}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date & Time (IST)
            </label>
            <div className="flex gap-2 mt-1">
              <input
                type="date"
                value={formatDateForInput(poll.startTime)}
                onChange={(e) =>
                  handleDateTimeChange("startTime", "date", e.target.value)
                }
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="time"
                value={formatTimeForInput(poll.startTime)}
                onChange={(e) =>
                  handleDateTimeChange("startTime", "time", e.target.value)
                }
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date & Time (IST)
            </label>
            <div className="flex gap-2 mt-1">
              <input
                type="date"
                value={formatDateForInput(poll.endTime)}
                onChange={(e) =>
                  handleDateTimeChange("endTime", "date", e.target.value)
                }
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="time"
                value={formatTimeForInput(poll.endTime)}
                onChange={(e) =>
                  handleDateTimeChange("endTime", "time", e.target.value)
                }
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={() => setRoute({ page: "adminDashboard" })}
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );

  // Step 2: Questions
  const CreatePollStep2 = ({
    poll,
    addQuestion,
    handleQuestionTextChange,
    onBack,
    onNext,
  }) => (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Step 2: Questions
      </h2>
      <div className="space-y-4">
        {poll.questions.map((q, index) => (
          <div key={q.id} className="p-4 border rounded-lg bg-gray-50">
            <textarea
              value={q.text}
              onChange={(e) => handleQuestionTextChange(q.id, e.target.value)}
              placeholder={`Question #${index + 1}`}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>
      <button
        onClick={addQuestion}
        className="mt-4 text-blue-600 hover:underline flex items-center space-x-2"
      >
        <PlusIcon />
        <span>Add Question</span>
      </button>
      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );

  // Step 3: Settings & Voters
  const CreatePollStep3 = ({ poll, setPoll, onBack, setRoute }) => (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Step 3: Settings & Voters
      </h2>
      <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">General Settings</h3>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={poll.settings.allowSkip}
              onChange={(e) =>
                setPoll((prev) => ({
                  ...prev,
                  settings: { ...prev.settings, allowSkip: e.target.checked },
                }))
              }
              className="form-checkbox"
            />
            <span>Allow Skip</span>
          </label>
          <br />
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={poll.settings.weightedVotes}
              onChange={(e) =>
                setPoll((prev) => ({
                  ...prev,
                  settings: {
                    ...prev.settings,
                    weightedVotes: e.target.checked,
                  },
                }))
              }
              className="form-checkbox"
            />
            <span>Weighted Votes</span>
          </label>
        </div>
        <VoterLists poll={poll} setPoll={setPoll} />
      </div>
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          Back
        </button>
        <div className="flex space-x-4">
          <button
            onClick={savePollDraft}
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
          >
            Save Draft
          </button>
          <button
            onClick={openPollAndInvite}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Open Poll & Invite Later
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <Stepper />
      <Alert
        message={localAlert.message}
        type={localAlert.type}
        onDismiss={() => setLocalAlert({ message: "", type: "" })}
      />

      {step === 1 && (
        <CreatePollStep1
          poll={poll}
          handleChange={handleChange}
          handleDateTimeChange={handleDateTimeChange}
          onNext={handleNext}
          setRoute={setRoute}
        />
      )}
      {step === 2 && (
        <CreatePollStep2
          poll={poll}
          addQuestion={addQuestion}
          handleQuestionTextChange={handleQuestionTextChange}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <CreatePollStep3
          poll={poll}
          setPoll={setPoll}
          onBack={handleBack}
          setRoute={setRoute}
        />
      )}
    </div>
  );
};
export default CreatePoll;
