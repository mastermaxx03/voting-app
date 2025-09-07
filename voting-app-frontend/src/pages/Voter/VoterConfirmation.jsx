import React from "react";

const VoterConfirmation = ({ setRoute, setAuth }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Thank You!</h2>
        <p className="mb-6 text-gray-700">
          Your vote has been successfully recorded.
        </p>
        <button
          onClick={() => {
            setAuth(null); // Log out voter after confirmation
            setRoute({ page: "home" }); // Return to home/login
          }}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default VoterConfirmation;
