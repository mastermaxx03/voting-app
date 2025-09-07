import React, { useState, useRef, useEffect } from "react";
import { Modal } from "../../components/common/Modal";
import { Alert } from "../../components/common/Alert";
import { TrashIcon, PlusIcon } from "../../components/common/icons";

export const VoterLists = ({ poll, setPoll }) => {
  const [newVoter, setNewVoter] = useState({
    email: "",
    name: "",
    weight: "1.00",
  });
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const editInputRef = useRef(null);

  // TODO: Add API calls to add/remove/update voters for this poll

  const handleAddVoter = () => {
    // Basic validation
    if (
      !newVoter.email ||
      !newVoter.weight ||
      parseFloat(newVoter.weight) <= 0
    ) {
      setAlert({
        message: "Email and a weight > 0 are required.",
        type: "error",
      });
      return;
    }
    if (poll.voters.some((v) => v.email === newVoter.email)) {
      setAlert({
        message: "This email address is already in the list.",
        type: "error",
      });
      return;
    }
    const voterToAdd = {
      id: Date.now(),
      ...newVoter,
      weight: parseFloat(newVoter.weight).toFixed(2),
    };
    setPoll({ ...poll, voters: [...poll.voters, voterToAdd] });
    setNewVoter({ email: "", name: "", weight: "1.00" });
    setAlert({ message: "Voter added successfully.", type: "success" });
  };

  const handleDeleteVoter = (id) => {
    setPoll({ ...poll, voters: poll.voters.filter((v) => v.id !== id) });
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold text-gray-700 mb-4">
        Voter List for "{poll.title}"
      </h3>
      <Alert
        message={alert.message}
        type={alert.type}
        onDismiss={() => setAlert({ message: "", type: "" })}
      />

      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <button
          onClick={() => setShowInviteModal(true)}
          disabled={poll.voters.length === 0}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
        >
          Send Invites
        </button>
        <button
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
          disabled
        >
          Import CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-2">Email</th>
              <th className="p-2">Name</th>
              <th className="p-2 w-24">Weight</th>
              <th className="p-2 w-16"></th>
            </tr>
          </thead>
          <tbody>
            {poll.voters.map((voter) => (
              <tr key={voter.id} className="border-b">
                <td className="p-2">{voter.email}</td>
                <td className="p-2">{voter.name}</td>
                <td className="p-2">{parseFloat(voter.weight).toFixed(2)}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleDeleteVoter(voter.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
            {/* Add new voter row */}
            <tr className="bg-gray-50">
              <td className="p-2">
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={newVoter.email}
                  onChange={(e) =>
                    setNewVoter({ ...newVoter, email: e.target.value })
                  }
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  placeholder="Voter Name"
                  value={newVoter.name}
                  onChange={(e) =>
                    setNewVoter({ ...newVoter, name: e.target.value })
                  }
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="p-2">
                <input
                  type="number"
                  step="0.01"
                  value={newVoter.weight}
                  onChange={(e) =>
                    setNewVoter({ ...newVoter, weight: e.target.value })
                  }
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="p-2 text-center">
                <button
                  onClick={handleAddVoter}
                  className="text-green-600 hover:text-green-800"
                >
                  <PlusIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showInviteModal && (
        <Modal title="Send Invites" onClose={() => setShowInviteModal(false)}>
          <p>
            This will send email invitations to {poll.voters.length} voters.
          </p>
        </Modal>
      )}
    </div>
  );
};
