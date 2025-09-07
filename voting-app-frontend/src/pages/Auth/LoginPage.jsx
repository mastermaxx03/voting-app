import React, { useState } from "react";
import { initialPolls } from "../../constants/mockData";

const LoginPage = ({ setRoute, setAuth }) => {
  const [page, setPage] = useState("home"); // 'home', 'adminLogin', 'voterLogin'
  const [voterEmail, setVoterEmail] = useState("");
  const [voterOtpSent, setVoterOtpSent] = useState(false);
  const [voterOtp, setVoterOtp] = useState("");
  const [error, setError] = useState("");

  // Mock admin login: no backend call yet
  const handleAdminLogin = () => {
    setAuth({ type: "admin", name: "Admin User" });
    setRoute({ page: "adminDashboard" });
  };

  // Mock voter OTP request using mock data
  const handleVoterOtpRequest = () => {
    const voter = initialPolls
      .flatMap((p) => p.voters)
      .find((v) => v.email === voterEmail.toLowerCase());

    if (voter) {
      const poll = initialPolls.find((p) =>
        p.voters.some((v) => v.id === voter.id)
      );
      if (poll.status !== "OPEN" && poll.status !== "EXTENDED") {
        setError("This poll is not currently open for voting.");
        return;
      }
      if (voter.hasVoted) {
        setError("You have already submitted your vote for this poll.");
        return;
      }
      setVoterOtpSent(true);
      setError("");
    } else {
      setError("This email is not registered for any open poll.");
    }
  };

  // Mock OTP verification: accepts OTP '654321' for demo
  const handleVoterOtpVerify = () => {
    if (voterOtp === "654321") {
      const voter = initialPolls
        .flatMap((p) => p.voters)
        .find((v) => v.email === voterEmail.toLowerCase());

      const poll = initialPolls.find((p) =>
        p.voters.some((v) => v.id === voter.id)
      );

      setAuth({ type: "voter", ...voter });
      setRoute({ page: "voterBallot", pollId: poll.id, voterId: voter.id });
      setError("");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  if (page === "home") {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="p-4 border-b bg-white flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Logo</h1>
          <h2 className="text-xl font-semibold text-gray-600">
            In-House Voting
          </h2>
        </header>
        <main className="flex-grow flex flex-col justify-center items-center p-8 text-center">
          <button
            onClick={() => setPage("adminLogin")}
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-6 w-64"
          >
            Admin Login
          </button>
          <button
            onClick={() => setPage("voterLogin")}
            className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 w-64"
          >
            Voter Login
          </button>
        </main>
        <footer className="p-4 text-center text-gray-500 text-sm">
          © Company •{" "}
          {new Date().toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          IST
        </footer>
      </div>
    );
  }

  if (page === "adminLogin" || page === "voterLogin") {
    const isVoter = page === "voterLogin";
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <button
            onClick={() => setPage("home")}
            className="text-blue-600 hover:underline mb-6"
          >
            &larr; Back to Home
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {isVoter ? "Voter Login" : "Admin Login"}
          </h2>
          {error && (
            <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">
              {error}
            </p>
          )}

          {isVoter ? (
            <div className="space-y-4">
              {!voterOtpSent ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      value={voterEmail}
                      onChange={(e) => setVoterEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="voter@example.com"
                    />
                  </div>
                  <button
                    onClick={handleVoterOtpRequest}
                    className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
                  >
                    Send OTP
                  </button>
                </>
              ) : (
                <>
                  <p className="text-sm text-center text-gray-600">
                    An OTP has been sent to {voterEmail}. (Hint: use 654321)
                  </p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      OTP:
                    </label>
                    <input
                      type="text"
                      value={voterOtp}
                      onChange={(e) => setVoterOtp(e.target.value)}
                      maxLength="6"
                      placeholder="______"
                      className="mt-1 block w-full text-center tracking-[0.5em] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    onClick={handleVoterOtpVerify}
                    className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Verify & Vote
                  </button>
                  <button
                    onClick={() => setVoterOtpSent(false)}
                    className="text-sm text-blue-600 hover:underline w-full text-center mt-2"
                  >
                    Use a different email
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Admin Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@example.com"
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <button
                onClick={handleAdminLogin}
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login (No OTP needed for demo)
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default LoginPage;
