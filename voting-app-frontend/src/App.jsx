// import React, { useState, useEffect, useRef } from "react";

// // --- ICONS (inline SVG for simplicity) ---
// const UserCircleIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
//     />
//   </svg>
// );

// const TrashIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//     />
//   </svg>
// );

// const ArrowUpIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M5 15l7-7 7 7"
//     />
//   </svg>
// );

// const ArrowDownIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M19 9l-7 7-7-7"
//     />
//   </svg>
// );

// const PlusIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M12 4v16m8-8H4"
//     />
//   </svg>
// );

// const EditIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"
//     />
//   </svg>
// );

// const ViewIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//     />
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//     />
//   </svg>
// );

// const SparklesIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-12a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V6z"
//     />
//   </svg>
// );

// // --- MOCK DATA ---
// const initialPolls = [
//   {
//     id: 1,
//     title: "ABC Ltd — CoC Vote",
//     type: "Insolvency",
//     status: "DRAFT",
//     startTime: "2025-09-12T10:00:00",
//     endTime: "2025-09-12T18:00:00",
//     questions: [],
//     settings: { allowSkip: false, weightedVotes: true },
//     voters: [],
//   },
//   {
//     id: 2,
//     title: "Q3 Shareholder Vote",
//     type: "Shareholder",
//     status: "OPEN",
//     startTime: "2025-09-15T09:00:00",
//     endTime: "2025-09-15T17:00:00",
//     originalEndTime: "2025-09-15T17:00:00",
//     questions: [
//       {
//         id: 1,
//         text: "Approve the Q3 financial report.",
//         attachment: null,
//         options: ["Approve", "Reject", "Abstain"],
//         enabledOptions: ["Approve", "Reject", "Abstain"],
//       },
//       {
//         id: 2,
//         text: "Elect new board member: Ms. Priya Sharma.",
//         attachment: null,
//         options: ["Approve", "Reject", "Abstain"],
//         enabledOptions: ["Approve", "Reject", "Abstain"],
//       },
//     ],
//     settings: { allowSkip: true, weightedVotes: true },
//     voters: [
//       {
//         id: 1,
//         email: "a.kulkarni@example.com",
//         name: "Asha Kulkarni",
//         weight: 1.0,
//         hasVoted: true,
//         tempId: "voter001",
//         tempPass: "pass1",
//       },
//       {
//         id: 2,
//         email: "r.patil@example.com",
//         name: "Ravi Patil",
//         weight: 2.5,
//         hasVoted: true,
//         tempId: "voter002",
//         tempPass: "pass2",
//       },
//       {
//         id: 3,
//         email: "s.mehta@example.com",
//         name: "Suresh Mehta",
//         weight: 1.75,
//         hasVoted: false,
//         tempId: "voter003",
//         tempPass: "pass3",
//       },
//       {
//         id: 4,
//         email: "p.gupta@example.com",
//         name: "Priya Gupta",
//         weight: 1.0,
//         hasVoted: true,
//         tempId: "voter004",
//         tempPass: "pass4",
//       },
//       {
//         id: 5,
//         email: "v.singh@example.com",
//         name: "Vikram Singh",
//         weight: 3.0,
//         hasVoted: false,
//         tempId: "voter005",
//         tempPass: "pass5",
//       },
//     ],
//     votes: [
//       { voterId: 1, questionId: 1, option: "Approve" },
//       { voterId: 1, questionId: 2, option: "Approve" },
//       { voterId: 2, questionId: 1, option: "Reject" },
//       { voterId: 2, questionId: 2, option: "Abstain" },
//       { voterId: 4, questionId: 1, option: "Approve" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Annual General Meeting Resolutions",
//     type: "Shareholder",
//     status: "CLOSED",
//     startTime: "2025-08-20T09:00:00",
//     endTime: "2025-08-20T17:00:00",
//     originalEndTime: "2025-08-20T17:00:00",
//     questions: [
//       {
//         id: 1,
//         text: "Resolution 1: Adopt the annual accounts.",
//         attachment: null,
//         options: ["Approve", "Reject", "Abstain"],
//         enabledOptions: ["Approve", "Reject", "Abstain"],
//       },
//       {
//         id: 2,
//         text: "Resolution 2: Re-appoint auditors.",
//         attachment: null,
//         options: ["Approve", "Reject", "Abstain"],
//         enabledOptions: ["Approve", "Reject", "Abstain"],
//       },
//     ],
//     settings: { allowSkip: false, weightedVotes: true, extensionUsed: false },
//     voters: Array.from({ length: 50 }, (_, i) => ({
//       id: i + 1,
//       email: `shareholder${i + 1}@example.com`,
//       name: `Shareholder ${i + 1}`,
//       weight: (1 + Math.random() * 4).toFixed(2),
//       hasVoted: i < 42,
//       tempId: `voter_agm_${i + 1}`,
//       tempPass: "pass",
//     })),
//     votes: Array.from({ length: 42 }).flatMap((_, i) => [
//       {
//         voterId: i + 1,
//         questionId: 1,
//         option: Math.random() > 0.2 ? "Approve" : "Reject",
//       },
//       {
//         voterId: i + 1,
//         questionId: 2,
//         option: Math.random() > 0.15 ? "Approve" : "Abstain",
//       },
//     ]),
//   },
// ];

// // --- GEMINI API HELPER ---
// const callGeminiAPI = async (
//   prompt,
//   jsonSchema = null,
//   retries = 3,
//   delay = 1000
// ) => {
//   const apiKey = ""; // This will be handled by the environment
//   const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

//   const payload = {
//     contents: [{ role: "user", parts: [{ text: prompt }] }],
//   };

//   if (jsonSchema) {
//     payload.generationConfig = {
//       responseMimeType: "application/json",
//       responseSchema: jsonSchema,
//     };
//   }

//   for (let i = 0; i < retries; i++) {
//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error(`API call failed with status: ${response.status}`);
//       }

//       const result = await response.json();

//       if (
//         result.candidates &&
//         result.candidates.length > 0 &&
//         result.candidates[0].content &&
//         result.candidates[0].content.parts &&
//         result.candidates[0].content.parts.length > 0
//       ) {
//         const text = result.candidates[0].content.parts[0].text;
//         return text;
//       } else {
//         throw new Error("Unexpected response structure from API.");
//       }
//     } catch (error) {
//       console.error(`Attempt ${i + 1} failed:`, error);
//       if (i < retries - 1) {
//         await new Promise((res) => setTimeout(res, delay * Math.pow(2, i)));
//       } else {
//         return null; // Return null after all retries fail
//       }
//     }
//   }
// };

// // --- HELPER FUNCTIONS ---
// const formatDateTimeIST = (dateString) => {
//   if (!dateString) return "N/A";
//   const date = new Date(dateString);
//   return date.toLocaleString("en-IN", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     timeZone: "Asia/Kolkata",
//   });
// };

// const formatDateForInput = (dateString) => {
//   if (!dateString) return "";
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = (date.getMonth() + 1).toString().padStart(2, "0");
//   const day = date.getDate().toString().padStart(2, "0");
//   return `${year}-${month}-${day}`;
// };

// const formatTimeForInput = (dateString) => {
//   if (!dateString) return "";
//   const date = new Date(dateString);
//   const hours = date.getHours().toString().padStart(2, "0");
//   const minutes = date.getMinutes().toString().padStart(2, "0");
//   return `${hours}:${minutes}`;
// };

// // --- UI COMPONENTS ---
// const Modal = ({ children, onClose, title }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
//     <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//       <div className="p-4 border-b">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//       </div>
//       <div className="p-6">{children}</div>
//     </div>
//   </div>
// );

// const Alert = ({ message, type, onDismiss }) => {
//   const baseClasses =
//     "p-4 rounded-md text-sm mb-4 flex justify-between items-center";
//   const typeClasses = {
//     success: "bg-green-100 text-green-800",
//     error: "bg-red-100 text-red-800",
//     info: "bg-blue-100 text-blue-800",
//   };
//   if (!message) return null;
//   return (
//     <div className={`${baseClasses} ${typeClasses[type]}`}>
//       <span>{message}</span>
//       <button onClick={onDismiss} className="font-bold text-lg">
//         &times;
//       </button>
//     </div>
//   );
// };

// // --- APP SECTIONS / PAGES ---

// // WF-01 & WF-02: Homepage & Login
// const LoginPage = ({ setRoute, setAuth }) => {
//   const [page, setPage] = useState("home"); // 'home', 'adminLogin', 'voterLogin'
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [tempId, setTempId] = useState("");
//   const [tempPass, setTempPass] = useState("");
//   const [error, setError] = useState("");

//   const handleAdminLogin = () => {
//     if (!otpSent) {
//       setOtpSent(true);
//       setError("");
//     } else {
//       if (otp === "123456") {
//         setAuth({ type: "admin", name: "Admin User" });
//         setRoute({ page: "adminDashboard" });
//       } else {
//         setError("Invalid OTP. Please try again.");
//       }
//     }
//   };

//   const handleVoterLogin = () => {
//     // In a real app, this would check against mock data or an API
//     const voter = initialPolls
//       .flatMap((p) => p.voters)
//       .find((v) => v.tempId === tempId && v.tempPass === tempPass);
//     if (voter) {
//       const poll = initialPolls.find((p) =>
//         p.voters.some((v) => v.id === voter.id)
//       );
//       if (poll.status !== "OPEN" && poll.status !== "EXTENDED") {
//         setError("This poll is not currently open for voting.");
//         return;
//       }
//       if (voter.hasVoted) {
//         setError("You have already submitted your vote for this poll.");
//         return;
//       }
//       setAuth({ type: "voter", ...voter });
//       setRoute({ page: "voterBallot", pollId: poll.id, voterId: voter.id });
//     } else {
//       setError("Invalid credentials. Please check your invitation.");
//     }
//   };

//   if (page === "home") {
//     return (
//       <div className="min-h-screen bg-gray-50 flex flex-col">
//         <header className="p-4 border-b bg-white flex justify-between items-center">
//           <h1 className="text-xl font-bold text-gray-800">Logo</h1>
//           <h2 className="text-xl font-semibold text-gray-600">
//             In-House Voting
//           </h2>
//         </header>
//         <main className="flex-grow flex flex-col justify-center items-center p-8 text-center">
//           <button
//             onClick={() => setPage("adminLogin")}
//             className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-6 w-64"
//           >
//             Admin Login
//           </button>
//           <button
//             onClick={() => setPage("voterLogin")}
//             className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 w-64"
//           >
//             Voter Login
//           </button>
//         </main>
//         <footer className="p-4 text-center text-gray-500 text-sm">
//           © Company •{" "}
//           {new Date().toLocaleTimeString("en-IN", {
//             timeZone: "Asia/Kolkata",
//             hour12: false,
//             hour: "2-digit",
//             minute: "2-digit",
//           })}{" "}
//           IST
//         </footer>
//       </div>
//     );
//   }

//   if (page === "adminLogin" || page === "voterLogin") {
//     const isVoter = page === "voterLogin";
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//         <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//           <button
//             onClick={() => setPage("home")}
//             className="text-blue-600 hover:underline mb-6"
//           >
//             &larr; Back to Home
//           </button>
//           <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//             {isVoter ? "Voter Login" : "Admin Login"}
//           </h2>
//           {error && (
//             <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">
//               {error}
//             </p>
//           )}

//           {isVoter ? (
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Temp ID:
//                 </label>
//                 <input
//                   type="text"
//                   value={tempId}
//                   onChange={(e) => setTempId(e.target.value)}
//                   className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Temp Password:
//                 </label>
//                 <input
//                   type="password"
//                   value={tempPass}
//                   onChange={(e) => setTempPass(e.target.value)}
//                   className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <button
//                 onClick={handleVoterLogin}
//                 className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
//               >
//                 Login to Vote
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Admin Email
//                 </label>
//                 <input
//                   type="email"
//                   value="admin@example.com"
//                   readOnly
//                   className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
//                 />
//               </div>
//               {!otpSent && (
//                 <button
//                   onClick={handleAdminLogin}
//                   className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
//                 >
//                   Send OTP
//                 </button>
//               )}
//               {otpSent && (
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       OTP
//                     </label>
//                     <input
//                       type="text"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       maxLength="6"
//                       placeholder="______"
//                       className="mt-1 block w-full text-center tracking-[0.5em] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <button
//                     onClick={handleAdminLogin}
//                     className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
//                   >
//                     Verify & Continue
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// };

// // Admin Layout
// const AdminLayout = ({ children, auth, setRoute, setAuth }) => (
//   <div className="min-h-screen bg-gray-100">
//     <header className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
//             <UserCircleIcon />
//             <span className="text-sm font-medium text-gray-700">
//               {auth.name}
//             </span>
//           </div>
//           <button
//             onClick={() => {
//               setAuth(null);
//               setRoute({ page: "home" });
//             }}
//             className="text-sm text-blue-600 hover:underline"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3">
//         <div className="flex space-x-6 border-b pb-2">
//           <button
//             onClick={() => setRoute({ page: "adminDashboard" })}
//             className="text-gray-600 hover:text-blue-600 font-medium"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => setRoute({ page: "createPoll", step: 1 })}
//             className="text-gray-600 hover:text-blue-600 font-medium"
//           >
//             Create Poll
//           </button>
//           {/* These would be implemented fully in a larger app */}
//           <button className="text-gray-400 cursor-not-allowed font-medium">
//             My Profile
//           </button>
//         </div>
//       </nav>
//     </header>
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {children}
//     </main>
//   </div>
// );

// // WF-03: Admin Dashboard Home
// const AdminDashboard = ({ setRoute, polls, setPolls }) => {
//   const handleAction = (poll) => {
//     if (poll.status === "DRAFT") {
//       setRoute({ page: "createPoll", step: 1, pollId: poll.id });
//     } else if (poll.status === "OPEN" || poll.status === "EXTENDED") {
//       setRoute({ page: "livePollDashboard", pollId: poll.id });
//     } else if (poll.status === "CLOSED") {
//       setRoute({ page: "pollResults", pollId: poll.id });
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <button
//           onClick={() => setRoute({ page: "createPoll", step: 1 })}
//           className="bg-blue-500 text-white font-bold py-4 px-6 rounded-lg shadow hover:bg-blue-600 transition text-left"
//         >
//           Create New Poll
//         </button>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-bold text-gray-700">Voter Lists</h3>
//           <p className="text-sm text-gray-500">Manage voter lists per poll.</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-bold text-gray-700">Poll Results</h3>
//           <p className="text-sm text-gray-500">View results of closed polls.</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <h2 className="text-lg font-semibold text-gray-800 p-6">My Polls</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left text-gray-600">
//             <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
//               <tr>
//                 <th className="px-6 py-3">Title</th>
//                 <th className="px-6 py-3">Type</th>
//                 <th className="px-6 py-3">Status</th>
//                 <th className="px-6 py-3">Window (IST)</th>
//                 <th className="px-6 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {polls.map((poll) => (
//                 <tr
//                   key={poll.id}
//                   className="bg-white border-b hover:bg-gray-50"
//                 >
//                   <td className="px-6 py-4 font-medium text-gray-900">
//                     {poll.title}
//                   </td>
//                   <td className="px-6 py-4">{poll.type}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                         poll.status === "OPEN"
//                           ? "bg-green-100 text-green-800"
//                           : poll.status === "DRAFT"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : poll.status === "CLOSED"
//                           ? "bg-gray-200 text-gray-800"
//                           : "bg-blue-100 text-blue-800"
//                       }`}
//                     >
//                       {poll.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     {formatDateTimeIST(poll.startTime)} &rarr;{" "}
//                     {formatDateTimeIST(poll.endTime)}
//                   </td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => handleAction(poll)}
//                       className="font-medium text-blue-600 hover:underline flex items-center space-x-1"
//                     >
//                       {poll.status === "DRAFT" ? <EditIcon /> : <ViewIcon />}
//                       <span>{poll.status === "DRAFT" ? "Edit" : "View"}</span>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// // WF-04, 05, 06: Create Poll Flow
// const CreatePoll = ({ setRoute, route, polls, setPolls }) => {
//   const { step, pollId } = route;
//   const isEditing = pollId != null;
//   const [poll, setPoll] = useState(
//     isEditing
//       ? polls.find((p) => p.id === pollId)
//       : {
//           id: Date.now(),
//           title: "",
//           type: "Custom",
//           status: "DRAFT",
//           startTime: "",
//           endTime: "",
//           questions: [
//             {
//               id: Date.now(),
//               text: "",
//               options: ["Approve", "Reject", "Abstain"],
//               enabledOptions: ["Approve", "Reject", "Abstain"],
//             },
//           ],
//           settings: { allowSkip: false, weightedVotes: true },
//           voters: [],
//         }
//   );
//   const [alert, setAlert] = useState({ message: "", type: "" });
//   const [isSuggesting, setIsSuggesting] = useState(false);

//   const handleSave = (newStatus = "DRAFT") => {
//     // Validation
//     if (step === 1 && (!poll.title || !poll.startTime || !poll.endTime)) {
//       setAlert({ message: "Please fill all required fields.", type: "error" });
//       return;
//     }
//     if (step === 1 && new Date(poll.startTime) >= new Date(poll.endTime)) {
//       setAlert({
//         message: "End time must be after start time.",
//         type: "error",
//       });
//       return;
//     }
//     if (step === 2 && poll.questions.some((q) => !q.text.trim())) {
//       setAlert({
//         message: "All question fields must be filled.",
//         type: "error",
//       });
//       return;
//     }

//     const updatedPoll = { ...poll, status: newStatus };
//     if (newStatus === "OPEN") {
//       updatedPoll.originalEndTime = updatedPoll.endTime;
//     }

//     setPolls((prevPolls) => {
//       const existing = prevPolls.find((p) => p.id === poll.id);
//       if (existing) {
//         return prevPolls.map((p) => (p.id === poll.id ? updatedPoll : p));
//       }
//       return [...prevPolls, updatedPoll];
//     });

//     setAlert({
//       message: `Poll ${
//         newStatus === "DRAFT" ? "saved as draft" : "is now OPEN"
//       }.`,
//       type: "success",
//     });

//     if (newStatus === "OPEN") {
//       setRoute({ page: "livePollDashboard", pollId: poll.id });
//     } else {
//       setRoute({ page: "adminDashboard" });
//     }
//   };

//   const handleStep1Change = (e) => {
//     const { name, value } = e.target;
//     if (name === "startDate" || name === "startTime") {
//       const date =
//         name === "startDate"
//           ? value
//           : formatDateForInput(poll.startTime) ||
//             formatDateForInput(new Date());
//       const time =
//         name === "startTime"
//           ? value
//           : formatTimeForInput(poll.startTime) || "09:00";
//       setPoll({ ...poll, startTime: `${date}T${time}` });
//     } else if (name === "endDate" || name === "endTime") {
//       const date =
//         name === "endDate"
//           ? value
//           : formatDateForInput(poll.endTime) || formatDateForInput(new Date());
//       const time =
//         name === "endTime"
//           ? value
//           : formatTimeForInput(poll.endTime) || "17:00";
//       setPoll({ ...poll, endTime: `${date}T${time}` });
//     } else {
//       setPoll({ ...poll, [name]: value });
//     }
//   };

//   const Stepper = () => (
//     <div className="mb-8 flex items-center justify-center space-x-4">
//       {["Basics", "Questions", "Settings & Voters"].map((s, i) => (
//         <React.Fragment key={s}>
//           <div className="flex items-center">
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                 step >= i + 1
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               {i + 1}
//             </div>
//             <span
//               className={`ml-2 font-medium ${
//                 step >= i + 1 ? "text-blue-600" : "text-gray-500"
//               }`}
//             >
//               {s}
//             </span>
//           </div>
//           {i < 2 && <div className="flex-1 h-px bg-gray-300"></div>}
//         </React.Fragment>
//       ))}
//     </div>
//   );

//   const handleQuestionChange = (id, text) => {
//     setPoll({
//       ...poll,
//       questions: poll.questions.map((q) => (q.id === id ? { ...q, text } : q)),
//     });
//   };

//   const addQuestion = () => {
//     setPoll({
//       ...poll,
//       questions: [
//         ...poll.questions,
//         {
//           id: Date.now(),
//           text: "",
//           options: ["Approve", "Reject", "Abstain"],
//           enabledOptions: ["Approve", "Reject", "Abstain"],
//         },
//       ],
//     });
//   };

//   const deleteQuestion = (id) => {
//     if (poll.questions.length > 1) {
//       setPoll({
//         ...poll,
//         questions: poll.questions.filter((q) => q.id !== id),
//       });
//     }
//   };

//   const moveQuestion = (index, direction) => {
//     const newQuestions = [...poll.questions];
//     const targetIndex = index + direction;
//     if (targetIndex >= 0 && targetIndex < newQuestions.length) {
//       [newQuestions[index], newQuestions[targetIndex]] = [
//         newQuestions[targetIndex],
//         newQuestions[index],
//       ];
//       setPoll({ ...poll, questions: newQuestions });
//     }
//   };

//   const toggleOption = (qId, option) => {
//     setPoll({
//       ...poll,
//       questions: poll.questions.map((q) => {
//         if (q.id === qId) {
//           const enabledOptions = q.enabledOptions.includes(option)
//             ? q.enabledOptions.filter((o) => o !== option)
//             : [...q.enabledOptions, option];
//           // Ensure at least one option is enabled
//           if (enabledOptions.length > 0) {
//             return { ...q, enabledOptions };
//           }
//         }
//         return q;
//       }),
//     });
//   };

//   const handleSuggestQuestions = async () => {
//     if (!poll.title || !poll.type) {
//       setAlert({
//         message:
//           "Please provide a poll title and type on Step 1 before suggesting questions.",
//         type: "error",
//       });
//       return;
//     }
//     setIsSuggesting(true);
//     setAlert({ message: "", type: "" });

//     const prompt = `Based on a poll with the title '${poll.title}' and type '${poll.type}', suggest 3 relevant voting questions. The questions should be suitable for a formal, in-house corporate vote.`;
//     const schema = {
//       type: "ARRAY",
//       items: {
//         type: "OBJECT",
//         properties: { text: { type: "STRING" } },
//         required: ["text"],
//       },
//     };

//     const responseText = await callGeminiAPI(prompt, schema);
//     setIsSuggesting(false);

//     if (responseText) {
//       try {
//         const suggestions = JSON.parse(responseText);
//         const newQuestions = suggestions.map((s) => ({
//           id: Date.now() + Math.random(),
//           text: s.text,
//           options: ["Approve", "Reject", "Abstain"],
//           enabledOptions: ["Approve", "Reject", "Abstain"],
//         }));

//         // If the first question is empty, replace it. Otherwise, add new ones.
//         const updatedQuestions = [...poll.questions];
//         if (updatedQuestions.length === 1 && !updatedQuestions[0].text.trim()) {
//           updatedQuestions.shift();
//         }

//         setPoll((prevPoll) => ({
//           ...prevPoll,
//           questions: [...updatedQuestions, ...newQuestions],
//         }));
//         setAlert({
//           message: "AI-suggested questions have been added.",
//           type: "success",
//         });
//       } catch (e) {
//         console.error("Failed to parse AI response:", e);
//         setAlert({
//           message: "Could not understand the AI response.",
//           type: "error",
//         });
//       }
//     } else {
//       setAlert({
//         message: "Failed to get suggestions from AI. Please try again.",
//         type: "error",
//       });
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
//       <Stepper />
//       <Alert
//         message={alert.message}
//         type={alert.type}
//         onDismiss={() => setAlert({ message: "", type: "" })}
//       />

//       {step === 1 && (
//         <div>
//           <h2 className="text-xl font-bold text-gray-800 mb-6">
//             Step 1: Poll Basics
//           </h2>
//           <div className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Election Type
//               </label>
//               <div className="flex flex-wrap gap-4">
//                 {["Custom", "Insolvency", "Shareholder", "Auction"].map(
//                   (type) => (
//                     <label key={type} className="flex items-center">
//                       <input
//                         type="radio"
//                         name="type"
//                         value={type}
//                         checked={poll.type === type}
//                         onChange={handleStep1Change}
//                         className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                       />
//                       <span className="ml-2 text-gray-700">{type}</span>
//                     </label>
//                   )
//                 )}
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Title of the Poll
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={poll.title}
//                 onChange={handleStep1Change}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Start Date & Time (IST)
//                 </label>
//                 <div className="flex gap-2 mt-1">
//                   <input
//                     type="date"
//                     name="startDate"
//                     value={formatDateForInput(poll.startTime)}
//                     onChange={handleStep1Change}
//                     className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                   <input
//                     type="time"
//                     name="startTime"
//                     value={formatTimeForInput(poll.startTime)}
//                     onChange={handleStep1Change}
//                     className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   End Date & Time (IST)
//                 </label>
//                 <div className="flex gap-2 mt-1">
//                   <input
//                     type="date"
//                     name="endDate"
//                     value={formatDateForInput(poll.endTime)}
//                     onChange={handleStep1Change}
//                     className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                   <input
//                     type="time"
//                     name="endTime"
//                     value={formatTimeForInput(poll.endTime)}
//                     onChange={handleStep1Change}
//                     className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-8 flex justify-end space-x-4">
//             <button
//               onClick={() => setRoute({ page: "adminDashboard" })}
//               className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() =>
//                 setRoute({ page: "createPoll", step: 2, pollId: poll.id })
//               }
//               className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
//             >
//               Save & Continue
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 2 && (
//         <div>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold text-gray-800">
//               Step 2: Questions
//             </h2>
//             <button
//               onClick={handleSuggestQuestions}
//               disabled={isSuggesting}
//               className="flex items-center space-x-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-purple-300 transition"
//             >
//               <SparklesIcon />
//               <span>
//                 {isSuggesting ? "Thinking..." : "✨ Suggest Questions"}
//               </span>
//             </button>
//           </div>
//           <div className="space-y-6">
//             {poll.questions.map((q, index) => (
//               <div key={q.id} className="p-4 border rounded-lg bg-gray-50">
//                 <div className="flex items-start space-x-4">
//                   <span className="font-bold text-gray-600 mt-2">
//                     #{index + 1}
//                   </span>
//                   <div className="flex-grow">
//                     <textarea
//                       value={q.text}
//                       onChange={(e) =>
//                         handleQuestionChange(q.id, e.target.value)
//                       }
//                       placeholder="Question text..."
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                       rows="2"
//                     />
//                     <div className="mt-2">
//                       <span className="text-sm font-medium text-gray-700 mr-4">
//                         Options:
//                       </span>
//                       {q.options.map((opt) => (
//                         <label
//                           key={opt}
//                           className="inline-flex items-center mr-4"
//                         >
//                           <input
//                             type="checkbox"
//                             checked={q.enabledOptions.includes(opt)}
//                             onChange={() => toggleOption(q.id, opt)}
//                             className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                           />
//                           <span className="ml-2 text-sm text-gray-600">
//                             {opt}
//                           </span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <button
//                       className="text-gray-400 hover:text-gray-600 p-1 bg-white border rounded-md"
//                       title="Upload Reference (Not implemented)"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
//                         />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => deleteQuestion(q.id)}
//                       className="text-red-500 hover:text-red-700 p-1 bg-white border rounded-md"
//                       title="Delete"
//                     >
//                       <TrashIcon />
//                     </button>
//                     <button
//                       onClick={() => moveQuestion(index, -1)}
//                       className="text-gray-500 hover:text-gray-700 p-1 bg-white border rounded-md"
//                       title="Move Up"
//                     >
//                       <ArrowUpIcon />
//                     </button>
//                     <button
//                       onClick={() => moveQuestion(index, 1)}
//                       className="text-gray-500 hover:text-gray-700 p-1 bg-white border rounded-md"
//                       title="Move Down"
//                     >
//                       <ArrowDownIcon />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={addQuestion}
//             className="mt-6 flex items-center space-x-2 text-blue-600 font-medium hover:underline"
//           >
//             <PlusIcon />
//             <span>Add Question</span>
//           </button>
//           <div className="mt-8 flex justify-between">
//             <button
//               onClick={() =>
//                 setRoute({ page: "createPoll", step: 1, pollId: poll.id })
//               }
//               className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
//             >
//               Back
//             </button>
//             <button
//               onClick={() =>
//                 setRoute({ page: "createPoll", step: 3, pollId: poll.id })
//               }
//               className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
//             >
//               Save & Continue
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 3 && (
//         <div>
//           <h2 className="text-xl font-bold text-gray-800 mb-6">
//             Step 3: Settings & Voters
//           </h2>
//           <div className="space-y-6">
//             <div className="p-4 border rounded-lg">
//               <h3 className="font-semibold text-gray-700 mb-2">
//                 General Settings
//               </h3>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={poll.settings.allowSkip}
//                   onChange={(e) =>
//                     setPoll({
//                       ...poll,
//                       settings: {
//                         ...poll.settings,
//                         allowSkip: e.target.checked,
//                       },
//                     })
//                   }
//                   className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <span className="ml-2 text-gray-700">Allow Skip Questions</span>
//                 <span className="ml-2 text-xs text-gray-500">
//                   (If ON, voters may submit with unanswered questions)
//                 </span>
//               </label>
//               <label className="flex items-center mt-2">
//                 <input
//                   type="checkbox"
//                   checked={poll.settings.weightedVotes}
//                   onChange={(e) =>
//                     setPoll({
//                       ...poll,
//                       settings: {
//                         ...poll.settings,
//                         weightedVotes: e.target.checked,
//                       },
//                     })
//                   }
//                   className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <span className="ml-2 text-gray-700">Weighted Votes</span>
//                 <span className="ml-2 text-xs text-gray-500">
//                   (If OFF, every vote = 1)
//                 </span>
//               </label>
//             </div>
//             <div className="p-4 border rounded-lg bg-blue-50">
//               <h3 className="font-semibold text-gray-700 mb-2">Extension</h3>
//               <p className="text-sm text-gray-600">
//                 You can extend the poll once to any time within +24h of the
//                 original end time.
//               </p>
//             </div>
//             <VoterLists poll={poll} setPoll={setPoll} />
//           </div>
//           <div className="mt-8 flex justify-between items-center">
//             <button
//               onClick={() =>
//                 setRoute({ page: "createPoll", step: 2, pollId: poll.id })
//               }
//               className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
//             >
//               Back
//             </button>
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => handleSave("DRAFT")}
//                 className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
//               >
//                 Save Draft
//               </button>
//               <button
//                 onClick={() => handleSave("OPEN")}
//                 className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
//               >
//                 Open Poll & Invite Later
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // WF-07 & WF-08: VoterLists
// const VoterLists = ({ poll, setPoll }) => {
//   const [newVoter, setNewVoter] = useState({
//     email: "",
//     name: "",
//     weight: "1.00",
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [editingValue, setEditingValue] = useState("");
//   const [showInviteModal, setShowInviteModal] = useState(false);
//   const [alert, setAlert] = useState({ message: "", type: "" });
//   const editInputRef = useRef(null);

//   const handleAddVoter = () => {
//     if (
//       !newVoter.email ||
//       !newVoter.weight ||
//       parseFloat(newVoter.weight) <= 0
//     ) {
//       setAlert({
//         message: "Email and a weight > 0 are required.",
//         type: "error",
//       });
//       return;
//     }
//     if (poll.voters.some((v) => v.email === newVoter.email)) {
//       setAlert({
//         message: "This email address is already in the list.",
//         type: "error",
//       });
//       return;
//     }
//     const voterToAdd = {
//       id: Date.now(),
//       ...newVoter,
//       weight: parseFloat(newVoter.weight).toFixed(2),
//       tempId: `voter${Date.now()}`,
//       tempPass: Math.random().toString(36).substring(2, 8),
//     };
//     setPoll({ ...poll, voters: [...poll.voters, voterToAdd] });
//     setNewVoter({ email: "", name: "", weight: "1.00" });
//     setAlert({ message: "Voter added successfully.", type: "success" });
//   };

//   const handleDeleteVoter = (id) => {
//     setPoll({ ...poll, voters: poll.voters.filter((v) => v.id !== id) });
//   };

//   const handleEditClick = (voter, field) => {
//     setEditingId(`${voter.id}-${field}`);
//     setEditingValue(voter[field]);
//   };

//   useEffect(() => {
//     if (editingId) {
//       editInputRef.current?.focus();
//       editInputRef.current?.select();
//     }
//   }, [editingId]);

//   const handleEditSave = () => {
//     if (!editingId) return;
//     const [id, field] = editingId.split("-");
//     setPoll({
//       ...poll,
//       voters: poll.voters.map((v) =>
//         v.id == id ? { ...v, [field]: editingValue } : v
//       ),
//     });
//     setEditingId(null);
//   };

//   const handleSendInvites = () => {
//     // This is a simulation
//     console.log("Sending invites to:", poll.voters);
//     poll.voters.forEach((v) => {
//       console.log(`  To: ${v.email}, ID: ${v.tempId}, Pass: ${v.tempPass}`);
//     });
//     setShowInviteModal(false);
//     setAlert({
//       message: `Invitations sent to ${poll.voters.length} voters.`,
//       type: "info",
//     });
//   };

//   return (
//     <div className="p-4 border rounded-lg">
//       <h3 className="font-semibold text-gray-700 mb-4">
//         Voter List for "{poll.title}"
//       </h3>
//       <Alert
//         message={alert.message}
//         type={alert.type}
//         onDismiss={() => setAlert({ message: "", type: "" })}
//       />

//       <div className="mb-4 flex flex-wrap gap-2 items-center">
//         <button
//           onClick={() => setShowInviteModal(true)}
//           disabled={poll.voters.length === 0}
//           className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
//         >
//           Send Invites
//         </button>
//         {/* CSV functionality would be implemented with a library like Papaparse */}
//         <button
//           className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 disabled:bg-gray-300"
//           disabled
//         >
//           Import CSV
//         </button>
//         <button
//           className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 disabled:bg-gray-300"
//           disabled
//         >
//           Export CSV
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead className="bg-gray-50 text-left">
//             <tr>
//               <th className="p-2">Email</th>
//               <th className="p-2">Name</th>
//               <th className="p-2 w-24">Weight</th>
//               <th className="p-2 w-16"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {poll.voters.map((voter) => (
//               <tr key={voter.id} className="border-b">
//                 <td
//                   className="p-2"
//                   onClick={() => handleEditClick(voter, "email")}
//                 >
//                   {editingId === `${voter.id}-email` ? (
//                     <input
//                       ref={editInputRef}
//                       type="email"
//                       value={editingValue}
//                       onChange={(e) => setEditingValue(e.target.value)}
//                       onBlur={handleEditSave}
//                       onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
//                       className="w-full p-1 border rounded"
//                     />
//                   ) : (
//                     voter.email
//                   )}
//                 </td>
//                 <td
//                   className="p-2"
//                   onClick={() => handleEditClick(voter, "name")}
//                 >
//                   {editingId === `${voter.id}-name` ? (
//                     <input
//                       ref={editInputRef}
//                       type="text"
//                       value={editingValue}
//                       onChange={(e) => setEditingValue(e.target.value)}
//                       onBlur={handleEditSave}
//                       onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
//                       className="w-full p-1 border rounded"
//                     />
//                   ) : (
//                     voter.name
//                   )}
//                 </td>
//                 <td
//                   className="p-2"
//                   onClick={() => handleEditClick(voter, "weight")}
//                 >
//                   {editingId === `${voter.id}-weight` ? (
//                     <input
//                       ref={editInputRef}
//                       type="number"
//                       step="0.01"
//                       value={editingValue}
//                       onChange={(e) => setEditingValue(e.target.value)}
//                       onBlur={handleEditSave}
//                       onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
//                       className="w-full p-1 border rounded"
//                     />
//                   ) : (
//                     parseFloat(voter.weight).toFixed(2)
//                   )}
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={() => handleDeleteVoter(voter.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <TrashIcon />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {/* Add new voter row */}
//             <tr className="bg-gray-50">
//               <td className="p-2">
//                 <input
//                   type="email"
//                   placeholder="a.kulkarni@example.com"
//                   value={newVoter.email}
//                   onChange={(e) =>
//                     setNewVoter({ ...newVoter, email: e.target.value })
//                   }
//                   className="w-full p-1 border rounded"
//                 />
//               </td>
//               <td className="p-2">
//                 <input
//                   type="text"
//                   placeholder="Asha Kulkarni"
//                   value={newVoter.name}
//                   onChange={(e) =>
//                     setNewVoter({ ...newVoter, name: e.target.value })
//                   }
//                   className="w-full p-1 border rounded"
//                 />
//               </td>
//               <td className="p-2">
//                 <input
//                   type="number"
//                   step="0.01"
//                   value={newVoter.weight}
//                   onChange={(e) =>
//                     setNewVoter({ ...newVoter, weight: e.target.value })
//                   }
//                   className="w-full p-1 border rounded"
//                 />
//               </td>
//               <td className="p-2 text-center">
//                 <button
//                   onClick={handleAddVoter}
//                   className="text-green-600 hover:text-green-800"
//                 >
//                   <PlusIcon />
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {showInviteModal && (
//         <Modal title="Send Invites" onClose={() => setShowInviteModal(false)}>
//           <p className="text-gray-700 mb-6">
//             Send invites to {poll.voters.length} voters for "{poll.title}"?
//           </p>
//           <p className="text-sm text-gray-500 mb-6">
//             - Each will receive a link + temp ID/password.
//           </p>
//           <div className="flex justify-end space-x-4">
//             <button
//               onClick={() => setShowInviteModal(false)}
//               className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSendInvites}
//               className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
//             >
//               Send Now
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// // WF-09, 10, 11, 12: Admin Live Poll Dashboard
// const LivePollDashboard = ({ route, setRoute, polls, setPolls }) => {
//   const poll = polls.find((p) => p.id === route.pollId);
//   const [modal, setModal] = useState(null); // 'extend', 'close', 'nonVoters'
//   const [extension, setExtension] = useState({
//     date: "",
//     time: "",
//     reason: "",
//   });
//   const [alert, setAlert] = useState({ message: "", type: "" });

//   if (!poll) return <p>Poll not found.</p>;

//   const voters = poll.voters || [];
//   const votedCount = voters.filter((v) => v.hasVoted).length;
//   const nonVotedCount = voters.length - votedCount;
//   const nonVoters = voters.filter((v) => !v.hasVoted);

//   const handleExtendPoll = () => {
//     if (!extension.date || !extension.time) {
//       setAlert({
//         message: "Please set a new end date and time.",
//         type: "error",
//       });
//       return;
//     }
//     const newEndTime = new Date(`${extension.date}T${extension.time}`);
//     const originalEndTime = new Date(poll.originalEndTime);
//     const maxExtensionTime = new Date(
//       originalEndTime.getTime() + 24 * 60 * 60 * 1000
//     );

//     if (newEndTime <= new Date(poll.endTime) || newEndTime > maxExtensionTime) {
//       setAlert({
//         message: `New end time must be after current end time and within 24h of original end (${formatDateTimeIST(
//           maxExtensionTime
//         )}).`,
//         type: "error",
//       });
//       return;
//     }

//     setPolls(
//       polls.map((p) =>
//         p.id === poll.id
//           ? {
//               ...p,
//               status: "EXTENDED",
//               endTime: newEndTime.toISOString(),
//               settings: {
//                 ...p.settings,
//                 extensionUsed: true,
//                 extensionReason: extension.reason,
//               },
//             }
//           : p
//       )
//     );
//     setModal(null);
//   };

//   const handleClosePoll = () => {
//     setPolls(
//       polls.map((p) =>
//         p.id === poll.id
//           ? { ...p, status: "CLOSED", endTime: new Date().toISOString() }
//           : p
//       )
//     );
//     setModal(null);
//     setRoute({ page: "pollResults", pollId: poll.id });
//   };

//   const handleResend = () => {
//     console.log(
//       "Resending to non-voters:",
//       nonVoters.map((v) => v.email)
//     );
//     setAlert({
//       message: `Resent invites to ${nonVoters.length} non-voters.`,
//       type: "info",
//     });
//     setModal(null);
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg">
//       {poll.status === "EXTENDED" && (
//         <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6 text-center">
//           Poll extended to {formatDateTimeIST(poll.endTime)}. Votes already cast
//           are final.
//         </div>
//       )}
//       <div className="border-b pb-4 mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">{poll.title}</h2>
//         <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
//           <span>
//             Type: <span className="font-semibold">{poll.type}</span>
//           </span>
//           <span>
//             Status:{" "}
//             <span
//               className={`font-semibold ${
//                 poll.status === "OPEN" ? "text-green-600" : "text-blue-600"
//               }`}
//             >
//               {poll.status}
//             </span>
//           </span>
//           <span>
//             Ends at:{" "}
//             <span className="font-semibold">
//               {formatDateTimeIST(poll.endTime)}
//             </span>
//           </span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-gray-100 p-4 rounded-lg text-center">
//           <div className="text-3xl font-bold text-gray-800">
//             {voters.length}
//           </div>
//           <div className="text-sm text-gray-600">Invited</div>
//         </div>
//         <div className="bg-green-100 p-4 rounded-lg text-center">
//           <div className="text-3xl font-bold text-green-800">{votedCount}</div>
//           <div className="text-sm text-green-600">Voted</div>
//         </div>
//         <div className="bg-red-100 p-4 rounded-lg text-center">
//           <div className="text-3xl font-bold text-red-800">{nonVotedCount}</div>
//           <div className="text-sm text-red-600">Not Voted</div>
//         </div>
//       </div>

//       {poll.settings.allowSkip && (
//         <div className="mb-8 p-4 bg-gray-50 rounded-lg">
//           <h3 className="font-semibold text-gray-700 mb-2">
//             Per-question Turnout
//           </h3>
//           <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
//             {poll.questions.map((q) => {
//               const qVotes = (poll.votes || []).filter(
//                 (v) => v.questionId === q.id
//               ).length;
//               const turnout =
//                 voters.length > 0
//                   ? ((qVotes / voters.length) * 100).toFixed(0)
//                   : 0;
//               return (
//                 <span key={q.id} className="text-gray-600">
//                   Q{q.id}: <span className="font-bold">{turnout}%</span>
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       <Alert
//         message={alert.message}
//         type={alert.type}
//         onDismiss={() => setAlert({ message: "", type: "" })}
//       />

//       <div className="flex flex-wrap gap-4 justify-center mb-6">
//         <button
//           onClick={handleResend}
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           Resend to Non-Voters
//         </button>
//         <button
//           onClick={() => setModal("extend")}
//           disabled={poll.settings.extensionUsed}
//           className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
//         >
//           Extend Poll
//         </button>
//         <button
//           onClick={() => setModal("close")}
//           className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
//         >
//           Close Now
//         </button>
//       </div>

//       <div className="text-center">
//         <button
//           onClick={() => setModal("nonVoters")}
//           className="text-blue-600 hover:underline"
//         >
//           View Non-Voters
//         </button>
//       </div>

//       {modal === "nonVoters" && (
//         <Modal title="Non-Voters" onClose={() => setModal(null)}>
//           <div className="max-h-60 overflow-y-auto bg-gray-50 p-3 rounded-md mb-6">
//             <ul className="list-disc list-inside text-gray-700">
//               {nonVoters.map((v) => (
//                 <li key={v.id}>{v.email}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex justify-end space-x-4">
//             <button
//               onClick={() => setModal(null)}
//               className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
//             >
//               Close
//             </button>
//             <button
//               onClick={handleResend}
//               className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
//             >
//               Resend to All
//             </button>
//           </div>
//         </Modal>
//       )}

//       {modal === "extend" && (
//         <Modal title="Extend Poll" onClose={() => setModal(null)}>
//           <Alert
//             message={alert.message}
//             type={alert.type}
//             onDismiss={() => setAlert({ message: "", type: "" })}
//           />
//           <div className="space-y-4">
//             <p className="text-sm text-gray-600">
//               Current end: {formatDateTimeIST(poll.endTime)}
//             </p>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 New end (within +24h):
//               </label>
//               <div className="flex gap-2 mt-1">
//                 <input
//                   type="date"
//                   value={extension.date}
//                   onChange={(e) =>
//                     setExtension({ ...extension, date: e.target.value })
//                   }
//                   className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 <input
//                   type="time"
//                   value={extension.time}
//                   onChange={(e) =>
//                     setExtension({ ...extension, time: e.target.value })
//                   }
//                   className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Reason:
//               </label>
//               <input
//                 type="text"
//                 value={extension.reason}
//                 onChange={(e) =>
//                   setExtension({ ...extension, reason: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>
//           <div className="flex justify-end space-x-4 mt-6">
//             <button
//               onClick={() => setModal(null)}
//               className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleExtendPoll}
//               className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
//             >
//               Confirm Extension
//             </button>
//           </div>
//         </Modal>
//       )}

//       {modal === "close" && (
//         <Modal title="Close Poll" onClose={() => setModal(null)}>
//           <p className="text-gray-700 mb-2">
//             Are you sure you want to close "{poll.title}" now?
//           </p>
//           <p className="text-sm text-gray-500 mb-6">
//             No further votes will be accepted.
//           </p>
//           <div className="flex justify-end space-x-4">
//             <button
//               onClick={() => setModal(null)}
//               className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleClosePoll}
//               className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
//             >
//               Yes, Close Now
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// // WF-13: Poll Results
// const PollResults = ({ route, setRoute, polls }) => {
//   const poll = polls.find((p) => p.id === route.pollId);
//   const [summary, setSummary] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [alert, setAlert] = useState({ message: "", type: "" });

//   if (!poll) return <p>Poll not found.</p>;

//   const calculateResults = () => {
//     const results = {};
//     poll.questions.forEach((q) => {
//       results[q.id] = {};
//       (q.enabledOptions || q.options).forEach((opt) => {
//         results[q.id][opt] = 0;
//       });

//       const votesForQ = (poll.votes || []).filter((v) => v.questionId === q.id);
//       votesForQ.forEach((vote) => {
//         const voter = poll.voters.find((v) => v.id === vote.voterId);
//         if (voter && results[q.id].hasOwnProperty(vote.option)) {
//           const weight = poll.settings.weightedVotes
//             ? parseFloat(voter.weight)
//             : 1;
//           results[q.id][vote.option] += weight;
//         }
//       });
//     });
//     return results;
//   };

//   const results = calculateResults();
//   const totalVoters = poll.voters.length;

//   const handleGenerateSummary = async () => {
//     setIsGenerating(true);
//     setSummary("");
//     setAlert({ message: "", type: "" });

//     let resultsString = "";
//     poll.questions.forEach((q, index) => {
//       const votesForQ = (poll.votes || []).filter(
//         (v) => v.questionId === q.id
//       ).length;
//       const turnout =
//         totalVoters > 0 ? ((votesForQ / totalVoters) * 100).toFixed(0) : 0;
//       resultsString += `\nQuestion ${index + 1}: "${
//         q.text
//       }" (Turnout: ${turnout}%)\n`;
//       Object.entries(results[q.id]).forEach(([option, value]) => {
//         resultsString += `- ${option}: ${value.toFixed(2)}\n`;
//       });
//     });

//     const prompt = `You are an impartial analyst. Based on the following poll data, provide a brief, neutral executive summary of the results. Do not offer opinions or advice. Focus on the key outcomes and turnout.

// Poll Title: ${poll.title}
// Poll Type: ${poll.type}
// Weighted Votes: ${poll.settings.weightedVotes ? "Yes" : "No"}

// Results:${resultsString}

// Summary:`;

//     const responseText = await callGeminiAPI(prompt);
//     setIsGenerating(false);

//     if (responseText) {
//       setSummary(responseText);
//     } else {
//       setAlert({
//         message: "Failed to generate summary from AI. Please try again.",
//         type: "error",
//       });
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg">
//       <div className="border-b pb-4 mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">{poll.title}</h2>
//         <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
//           <span>
//             Status: <span className="font-semibold text-gray-800">CLOSED</span>
//           </span>
//           <span>
//             Window:{" "}
//             <span className="font-semibold">
//               {formatDateTimeIST(poll.startTime)} to{" "}
//               {formatDateTimeIST(poll.endTime)}
//             </span>
//           </span>
//         </div>
//         <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mt-2">
//           <span>Weighted: {poll.settings.weightedVotes ? "On" : "Off"}</span>
//           <span>Allow Skip: {poll.settings.allowSkip ? "On" : "Off"}</span>
//           <span>
//             Extension used: {poll.settings.extensionUsed ? "Yes" : "No"}
//           </span>
//         </div>
//       </div>

//       <Alert
//         message={alert.message}
//         type={alert.type}
//         onDismiss={() => setAlert({ message: "", type: "" })}
//       />

//       {summary && (
//         <div className="mb-8 p-6 border rounded-lg bg-purple-50">
//           <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center space-x-2">
//             <SparklesIcon />
//             <span>✨ AI-Generated Summary</span>
//           </h3>
//           <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
//         </div>
//       )}

//       <div className="space-y-6 mb-8">
//         {poll.questions.map((q, index) => {
//           const votesForQ = (poll.votes || []).filter(
//             (v) => v.questionId === q.id
//           ).length;
//           const turnout =
//             totalVoters > 0 ? ((votesForQ / totalVoters) * 100).toFixed(0) : 0;
//           return (
//             <div key={q.id} className="p-6 border rounded-lg bg-gray-50">
//               <h3 className="font-semibold text-gray-800 mb-4">
//                 Q{index + 1}: "{q.text}"
//               </h3>
//               <div className="space-y-2">
//                 {Object.entries(results[q.id]).map(([option, value]) => (
//                   <div
//                     key={option}
//                     className="flex justify-between items-center"
//                   >
//                     <span className="text-gray-700">{option}:</span>
//                     <span className="font-bold text-gray-900">
//                       {value.toFixed(2)}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-4 pt-4 border-t text-right">
//                 <span className="text-sm font-semibold text-gray-600">
//                   Turnout: {turnout}%
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex justify-between items-center flex-wrap gap-4">
//         <button
//           onClick={() => setRoute({ page: "adminDashboard" })}
//           className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
//         >
//           &larr; Back to Dashboard
//         </button>
//         <div className="flex space-x-4">
//           <button
//             onClick={handleGenerateSummary}
//             disabled={isGenerating}
//             className="flex items-center space-x-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-purple-300 transition"
//           >
//             <SparklesIcon />
//             <span>
//               {isGenerating ? "Generating..." : "✨ Generate Summary"}
//             </span>
//           </button>
//           <button
//             className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
//             disabled
//           >
//             Export CSV
//           </button>
//           <button
//             className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-300"
//             disabled
//           >
//             Export PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // WF-21: Voter Ballot
// const VoterBallot = ({ route, setRoute, polls, setPolls, auth }) => {
//   const poll = polls.find((p) => p.id === route.pollId);
//   const [votes, setVotes] = useState({}); // { [questionId]: option }

//   if (!poll) return <p>Poll not found.</p>;

//   const handleVote = (questionId, option) => {
//     setVotes((prev) => ({ ...prev, [questionId]: option }));
//   };

//   const handleSubmit = () => {
//     if (
//       !poll.settings.allowSkip &&
//       Object.keys(votes).length !== poll.questions.length
//     ) {
//       alert("Please answer all questions before submitting.");
//       return;
//     }

//     const newVotes = Object.entries(votes).map(([questionId, option]) => ({
//       voterId: auth.id,
//       questionId: parseInt(questionId),
//       option,
//     }));

//     setPolls((prevPolls) =>
//       prevPolls.map((p) => {
//         if (p.id === poll.id) {
//           return {
//             ...p,
//             votes: [...(p.votes || []), ...newVotes],
//             voters: p.voters.map((v) =>
//               v.id === auth.id ? { ...v, hasVoted: true } : v
//             ),
//           };
//         }
//         return p;
//       })
//     );

//     setRoute({ page: "voterConfirmation" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <header className="p-4 border-b bg-white">
//         <h1 className="text-xl font-bold text-gray-800 text-center">
//           {poll.title}
//         </h1>
//       </header>
//       <main className="flex-grow p-4 md:p-8">
//         <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
//           <div className="bg-blue-50 p-4 rounded-md text-center mb-6">
//             <p className="text-sm text-blue-700">
//               Voting Window: {formatDateTimeIST(poll.startTime)} to{" "}
//               {formatDateTimeIST(poll.endTime)}
//             </p>
//             <p className="text-sm text-blue-700 mt-1">
//               Your vote is secret. Results are not visible until the poll is
//               closed.
//             </p>
//           </div>

//           <div className="space-y-8">
//             {poll.questions.map((q, index) => (
//               <div key={q.id}>
//                 <h2 className="font-semibold text-gray-800 mb-3">
//                   Q{index + 1}. {q.text}
//                 </h2>
//                 <div className="flex flex-wrap gap-3">
//                   {(q.enabledOptions || q.options).map((opt) => (
//                     <button
//                       key={opt}
//                       onClick={() => handleVote(q.id, opt)}
//                       className={`py-2 px-6 rounded-lg font-semibold transition duration-200 border-2 ${
//                         votes[q.id] === opt
//                           ? "bg-blue-600 text-white border-blue-600"
//                           : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
//                       }`}
//                     >
//                       {opt}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-10 text-center">
//             <button
//               onClick={handleSubmit}
//               className="bg-green-600 text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-green-700 transition"
//             >
//               Submit Vote
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// // Voter Confirmation Page
// const VoterConfirmation = ({ setRoute, setAuth }) => (
//   <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//     <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
//       <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
//         <svg
//           className="h-8 w-8 text-green-600"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 13l4 4L19 7"
//           />
//         </svg>
//       </div>
//       <h2 className="text-2xl font-bold text-gray-800 mb-2">
//         Your vote has been recorded.
//       </h2>
//       <p className="text-gray-600 mb-6">Thank you for your participation.</p>
//       <p className="text-xs text-gray-500 mb-6">
//         Receipt ID: {`VOTE-${Date.now()}`}
//       </p>
//       <button
//         onClick={() => {
//           setAuth(null);
//           setRoute({ page: "home" });
//         }}
//         className="text-blue-600 hover:underline"
//       >
//         Logout
//       </button>
//     </div>
//   </div>
// );

// // --- MAIN APP COMPONENT ---
// export default function App() {
//   const [route, setRoute] = useState({ page: "home" });
//   const [auth, setAuth] = useState(null); // null, {type: 'admin', ...}, {type: 'voter', ...}
//   const [polls, setPolls] = useState(initialPolls);

//   const renderPage = () => {
//     if (!auth) {
//       return <LoginPage setRoute={setRoute} setAuth={setAuth} />;
//     }

//     if (auth.type === "admin") {
//       let content;
//       switch (route.page) {
//         case "adminDashboard":
//           content = (
//             <AdminDashboard
//               setRoute={setRoute}
//               polls={polls}
//               setPolls={setPolls}
//             />
//           );
//           break;
//         case "createPoll":
//           content = (
//             <CreatePoll
//               setRoute={setRoute}
//               route={route}
//               polls={polls}
//               setPolls={setPolls}
//             />
//           );
//           break;
//         case "livePollDashboard":
//           content = (
//             <LivePollDashboard
//               setRoute={setRoute}
//               route={route}
//               polls={polls}
//               setPolls={setPolls}
//             />
//           );
//           break;
//         case "pollResults":
//           content = (
//             <PollResults setRoute={setRoute} route={route} polls={polls} />
//           );
//           break;
//         default:
//           content = (
//             <AdminDashboard
//               setRoute={setRoute}
//               polls={polls}
//               setPolls={setPolls}
//             />
//           );
//       }
//       return (
//         <AdminLayout auth={auth} setRoute={setRoute} setAuth={setAuth}>
//           {content}
//         </AdminLayout>
//       );
//     }

//     if (auth.type === "voter") {
//       switch (route.page) {
//         case "voterBallot":
//           return (
//             <VoterBallot
//               route={route}
//               setRoute={setRoute}
//               polls={polls}
//               setPolls={setPolls}
//               auth={auth}
//             />
//           );
//         case "voterConfirmation":
//           return <VoterConfirmation setRoute={setRoute} setAuth={setAuth} />;
//         default:
//           // If voter is logged in but route is wrong, send back to login
//           setAuth(null);
//           setRoute({ page: "home" });
//           return <LoginPage setRoute={setRoute} setAuth={setAuth} />;
//       }
//     }
//   };

//   return (
//     <div className="font-sans antialiased text-gray-900">{renderPage()}</div>
//   );
// }
import React, { useState, useEffect, useRef } from "react";

// --- ICONS (inline SVG for simplicity) ---
const UserCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"
    />
  </svg>
);

const ViewIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-12a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V6z"
    />
  </svg>
);

// --- MOCK DATA ---
const initialPolls = [
  {
    id: 1,
    title: "ABC Ltd — CoC Vote",
    type: "Insolvency",
    status: "DRAFT",
    startTime: "2025-09-12T10:00:00",
    endTime: "2025-09-12T18:00:00",
    questions: [],
    settings: { allowSkip: false, weightedVotes: true },
    voters: [],
  },
  {
    id: 2,
    title: "Q3 Shareholder Vote",
    type: "Shareholder",
    status: "OPEN",
    startTime: "2025-09-15T09:00:00",
    endTime: "2025-09-15T17:00:00",
    originalEndTime: "2025-09-15T17:00:00",
    questions: [
      {
        id: 1,
        text: "Approve the Q3 financial report.",
        attachment: null,
        options: ["Approve", "Reject", "Abstain"],
        enabledOptions: ["Approve", "Reject", "Abstain"],
      },
      {
        id: 2,
        text: "Elect new board member: Ms. Priya Sharma.",
        attachment: null,
        options: ["Approve", "Reject", "Abstain"],
        enabledOptions: ["Approve", "Reject", "Abstain"],
      },
    ],
    settings: { allowSkip: true, weightedVotes: true },
    voters: [
      {
        id: 1,
        email: "a.kulkarni@example.com",
        name: "Asha Kulkarni",
        weight: 1.0,
        hasVoted: true,
      },
      {
        id: 2,
        email: "r.patil@example.com",
        name: "Ravi Patil",
        weight: 2.5,
        hasVoted: true,
      },
      {
        id: 3,
        email: "s.mehta@example.com",
        name: "Suresh Mehta",
        weight: 1.75,
        hasVoted: false,
      },
      {
        id: 4,
        email: "p.gupta@example.com",
        name: "Priya Gupta",
        weight: 1.0,
        hasVoted: true,
      },
      {
        id: 5,
        email: "v.singh@example.com",
        name: "Vikram Singh",
        weight: 3.0,
        hasVoted: false,
      },
    ],
    votes: [
      { voterId: 1, questionId: 1, option: "Approve" },
      { voterId: 1, questionId: 2, option: "Approve" },
      { voterId: 2, questionId: 1, option: "Reject" },
      { voterId: 2, questionId: 2, option: "Abstain" },
      { voterId: 4, questionId: 1, option: "Approve" },
    ],
  },
  {
    id: 3,
    title: "Annual General Meeting Resolutions",
    type: "Shareholder",
    status: "CLOSED",
    startTime: "2025-08-20T09:00:00",
    endTime: "2025-08-20T17:00:00",
    originalEndTime: "2025-08-20T17:00:00",
    questions: [
      {
        id: 1,
        text: "Resolution 1: Adopt the annual accounts.",
        attachment: null,
        options: ["Approve", "Reject", "Abstain"],
        enabledOptions: ["Approve", "Reject", "Abstain"],
      },
      {
        id: 2,
        text: "Resolution 2: Re-appoint auditors.",
        attachment: null,
        options: ["Approve", "Reject", "Abstain"],
        enabledOptions: ["Approve", "Reject", "Abstain"],
      },
    ],
    settings: { allowSkip: false, weightedVotes: true, extensionUsed: false },
    voters: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      email: `shareholder${i + 1}@example.com`,
      name: `Shareholder ${i + 1}`,
      weight: (1 + Math.random() * 4).toFixed(2),
      hasVoted: i < 42,
    })),
    votes: Array.from({ length: 42 }).flatMap((_, i) => [
      {
        voterId: i + 1,
        questionId: 1,
        option: Math.random() > 0.2 ? "Approve" : "Reject",
      },
      {
        voterId: i + 1,
        questionId: 2,
        option: Math.random() > 0.15 ? "Approve" : "Abstain",
      },
    ]),
  },
];

// --- GEMINI API HELPER ---
const callGeminiAPI = async (
  prompt,
  jsonSchema = null,
  retries = 3,
  delay = 1000
) => {
  const apiKey = ""; // This will be handled by the environment
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  if (jsonSchema) {
    payload.generationConfig = {
      responseMimeType: "application/json",
      responseSchema: jsonSchema,
    };
  }

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        return text;
      } else {
        throw new Error("Unexpected response structure from API.");
      }
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        await new Promise((res) => setTimeout(res, delay * Math.pow(2, i)));
      } else {
        return null; // Return null after all retries fail
      }
    }
  }
};

// --- HELPER FUNCTIONS ---
const formatDateTimeIST = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
};

const formatDateForInput = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatTimeForInput = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

// --- UI COMPONENTS ---
const Modal = ({ children, onClose, title }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  </div>
);

const Alert = ({ message, type, onDismiss }) => {
  const baseClasses =
    "p-4 rounded-md text-sm mb-4 flex justify-between items-center";
  const typeClasses = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };
  if (!message) return null;
  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <span>{message}</span>
      <button onClick={onDismiss} className="font-bold text-lg">
        &times;
      </button>
    </div>
  );
};

// --- APP SECTIONS / PAGES ---

// WF-01 & WF-02: Homepage & Login
const LoginPage = ({ setRoute, setAuth }) => {
  const [page, setPage] = useState("home"); // 'home', 'adminLogin', 'voterLogin'
  const [adminOtpSent, setAdminOtpSent] = useState(false);
  const [adminOtp, setAdminOtp] = useState("");
  const [voterEmail, setVoterEmail] = useState("");
  const [voterOtpSent, setVoterOtpSent] = useState(false);
  const [voterOtp, setVoterOtp] = useState("");
  const [error, setError] = useState("");

  const handleAdminLogin = () => {
    if (!adminOtpSent) {
      setAdminOtpSent(true);
      setError("");
    } else {
      if (adminOtp === "123456") {
        setAuth({ type: "admin", name: "Admin User" });
        setRoute({ page: "adminDashboard" });
      } else {
        setError("Invalid OTP. Please try again.");
      }
    }
  };

  const handleVoterOtpRequest = () => {
    // In a real app, this would call the backend to send an OTP
    const voter = initialPolls
      .flatMap((p) => p.voters)
      .find((v) => v.email === voterEmail);
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

  const handleVoterOtpVerify = () => {
    // In a real app, this would verify the OTP with the backend
    if (voterOtp === "654321") {
      const voter = initialPolls
        .flatMap((p) => p.voters)
        .find((v) => v.email === voterEmail);
      const poll = initialPolls.find((p) =>
        p.voters.some((v) => v.id === voter.id)
      );
      setAuth({ type: "voter", ...voter });
      setRoute({ page: "voterBallot", pollId: poll.id, voterId: voter.id });
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
                    An OTP has been sent to {voterEmail}.
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
                  value="admin@example.com"
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              {!adminOtpSent && (
                <button
                  onClick={handleAdminLogin}
                  className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send OTP
                </button>
              )}
              {adminOtpSent && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      OTP
                    </label>
                    <input
                      type="text"
                      value={adminOtp}
                      onChange={(e) => setAdminOtp(e.target.value)}
                      maxLength="6"
                      placeholder="______"
                      className="mt-1 block w-full text-center tracking-[0.5em] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    onClick={handleAdminLogin}
                    className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Verify & Continue
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
};

// Admin Layout
const AdminLayout = ({ children, auth, setRoute, setAuth }) => (
  <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
            <UserCircleIcon />
            <span className="text-sm font-medium text-gray-700">
              {auth.name}
            </span>
          </div>
          <button
            onClick={() => {
              setAuth(null);
              setRoute({ page: "home" });
            }}
            className="text-sm text-blue-600 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3">
        <div className="flex space-x-6 border-b pb-2">
          <button
            onClick={() => setRoute({ page: "adminDashboard" })}
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Home
          </button>
          <button
            onClick={() => setRoute({ page: "createPoll", step: 1 })}
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Create Poll
          </button>
          {/* These would be implemented fully in a larger app */}
          <button className="text-gray-400 cursor-not-allowed font-medium">
            My Profile
          </button>
        </div>
      </nav>
    </header>
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </main>
  </div>
);

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

// WF-04, 05, 06: Create Poll Flow
const CreatePoll = ({ setRoute, route, polls, setPolls }) => {
  const { step, pollId } = route;
  const isEditing = pollId != null;
  const [poll, setPoll] = useState(
    isEditing
      ? polls.find((p) => p.id === pollId)
      : {
          id: Date.now(),
          title: "",
          type: "Custom",
          status: "DRAFT",
          startTime: "",
          endTime: "",
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
        }
  );
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [isSuggesting, setIsSuggesting] = useState(false);

  const handleSave = (newStatus = "DRAFT") => {
    // Validation
    if (step === 1 && (!poll.title || !poll.startTime || !poll.endTime)) {
      setAlert({ message: "Please fill all required fields.", type: "error" });
      return;
    }
    if (step === 1 && new Date(poll.startTime) >= new Date(poll.endTime)) {
      setAlert({
        message: "End time must be after start time.",
        type: "error",
      });
      return;
    }
    if (step === 2 && poll.questions.some((q) => !q.text.trim())) {
      setAlert({
        message: "All question fields must be filled.",
        type: "error",
      });
      return;
    }

    const updatedPoll = { ...poll, status: newStatus };
    if (newStatus === "OPEN") {
      updatedPoll.originalEndTime = updatedPoll.endTime;
    }

    setPolls((prevPolls) => {
      const existing = prevPolls.find((p) => p.id === poll.id);
      if (existing) {
        return prevPolls.map((p) => (p.id === poll.id ? updatedPoll : p));
      }
      return [...prevPolls, updatedPoll];
    });

    setAlert({
      message: `Poll ${
        newStatus === "DRAFT" ? "saved as draft" : "is now OPEN"
      }.`,
      type: "success",
    });

    if (newStatus === "OPEN") {
      setRoute({ page: "livePollDashboard", pollId: poll.id });
    } else {
      setRoute({ page: "adminDashboard" });
    }
  };

  const handleStep1Change = (e) => {
    const { name, value } = e.target;
    if (name === "startDate" || name === "startTime") {
      const date =
        name === "startDate"
          ? value
          : formatDateForInput(poll.startTime) ||
            formatDateForInput(new Date());
      const time =
        name === "startTime"
          ? value
          : formatTimeForInput(poll.startTime) || "09:00";
      setPoll({ ...poll, startTime: `${date}T${time}` });
    } else if (name === "endDate" || name === "endTime") {
      const date =
        name === "endDate"
          ? value
          : formatDateForInput(poll.endTime) || formatDateForInput(new Date());
      const time =
        name === "endTime"
          ? value
          : formatTimeForInput(poll.endTime) || "17:00";
      setPoll({ ...poll, endTime: `${date}T${time}` });
    } else {
      setPoll({ ...poll, [name]: value });
    }
  };

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

  const handleQuestionChange = (id, text) => {
    setPoll({
      ...poll,
      questions: poll.questions.map((q) => (q.id === id ? { ...q, text } : q)),
    });
  };

  const addQuestion = () => {
    setPoll({
      ...poll,
      questions: [
        ...poll.questions,
        {
          id: Date.now(),
          text: "",
          options: ["Approve", "Reject", "Abstain"],
          enabledOptions: ["Approve", "Reject", "Abstain"],
        },
      ],
    });
  };

  const deleteQuestion = (id) => {
    if (poll.questions.length > 1) {
      setPoll({
        ...poll,
        questions: poll.questions.filter((q) => q.id !== id),
      });
    }
  };

  const moveQuestion = (index, direction) => {
    const newQuestions = [...poll.questions];
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < newQuestions.length) {
      [newQuestions[index], newQuestions[targetIndex]] = [
        newQuestions[targetIndex],
        newQuestions[index],
      ];
      setPoll({ ...poll, questions: newQuestions });
    }
  };

  const toggleOption = (qId, option) => {
    setPoll({
      ...poll,
      questions: poll.questions.map((q) => {
        if (q.id === qId) {
          const enabledOptions = q.enabledOptions.includes(option)
            ? q.enabledOptions.filter((o) => o !== option)
            : [...q.enabledOptions, option];
          // Ensure at least one option is enabled
          if (enabledOptions.length > 0) {
            return { ...q, enabledOptions };
          }
        }
        return q;
      }),
    });
  };

  const handleSuggestQuestions = async () => {
    if (!poll.title || !poll.type) {
      setAlert({
        message:
          "Please provide a poll title and type on Step 1 before suggesting questions.",
        type: "error",
      });
      return;
    }
    setIsSuggesting(true);
    setAlert({ message: "", type: "" });

    const prompt = `Based on a poll with the title '${poll.title}' and type '${poll.type}', suggest 3 relevant voting questions. The questions should be suitable for a formal, in-house corporate vote.`;
    const schema = {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: { text: { type: "STRING" } },
        required: ["text"],
      },
    };

    const responseText = await callGeminiAPI(prompt, schema);
    setIsSuggesting(false);

    if (responseText) {
      try {
        const suggestions = JSON.parse(responseText);
        const newQuestions = suggestions.map((s) => ({
          id: Date.now() + Math.random(),
          text: s.text,
          options: ["Approve", "Reject", "Abstain"],
          enabledOptions: ["Approve", "Reject", "Abstain"],
        }));

        // If the first question is empty, replace it. Otherwise, add new ones.
        const updatedQuestions = [...poll.questions];
        if (updatedQuestions.length === 1 && !updatedQuestions[0].text.trim()) {
          updatedQuestions.shift();
        }

        setPoll((prevPoll) => ({
          ...prevPoll,
          questions: [...updatedQuestions, ...newQuestions],
        }));
        setAlert({
          message: "AI-suggested questions have been added.",
          type: "success",
        });
      } catch (e) {
        console.error("Failed to parse AI response:", e);
        setAlert({
          message: "Could not understand the AI response.",
          type: "error",
        });
      }
    } else {
      setAlert({
        message: "Failed to get suggestions from AI. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <Stepper />
      <Alert
        message={alert.message}
        type={alert.type}
        onDismiss={() => setAlert({ message: "", type: "" })}
      />

      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Step 1: Poll Basics
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Election Type
              </label>
              <div className="flex flex-wrap gap-4">
                {["Custom", "Insolvency", "Shareholder", "Auction"].map(
                  (type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={poll.type === type}
                        onChange={handleStep1Change}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  )
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title of the Poll
              </label>
              <input
                type="text"
                name="title"
                value={poll.title}
                onChange={handleStep1Change}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date & Time (IST)
                </label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="date"
                    name="startDate"
                    value={formatDateForInput(poll.startTime)}
                    onChange={handleStep1Change}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="time"
                    name="startTime"
                    value={formatTimeForInput(poll.startTime)}
                    onChange={handleStep1Change}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                    name="endDate"
                    value={formatDateForInput(poll.endTime)}
                    onChange={handleStep1Change}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="time"
                    name="endTime"
                    value={formatTimeForInput(poll.endTime)}
                    onChange={handleStep1Change}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              onClick={() =>
                setRoute({ page: "createPoll", step: 2, pollId: poll.id })
              }
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Save & Continue
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Step 2: Questions
            </h2>
            <button
              onClick={handleSuggestQuestions}
              disabled={isSuggesting}
              className="flex items-center space-x-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-purple-300 transition"
            >
              <SparklesIcon />
              <span>
                {isSuggesting ? "Thinking..." : "✨ Suggest Questions"}
              </span>
            </button>
          </div>
          <div className="space-y-6">
            {poll.questions.map((q, index) => (
              <div key={q.id} className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-start space-x-4">
                  <span className="font-bold text-gray-600 mt-2">
                    #{index + 1}
                  </span>
                  <div className="flex-grow">
                    <textarea
                      value={q.text}
                      onChange={(e) =>
                        handleQuestionChange(q.id, e.target.value)
                      }
                      placeholder="Question text..."
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      rows="2"
                    />
                    <div className="mt-2">
                      <span className="text-sm font-medium text-gray-700 mr-4">
                        Options:
                      </span>
                      {q.options.map((opt) => (
                        <label
                          key={opt}
                          className="inline-flex items-center mr-4"
                        >
                          <input
                            type="checkbox"
                            checked={q.enabledOptions.includes(opt)}
                            onChange={() => toggleOption(q.id, opt)}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-600">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="text-gray-400 hover:text-gray-600 p-1 bg-white border rounded-md"
                      title="Upload Reference (Not implemented)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteQuestion(q.id)}
                      className="text-red-500 hover:text-red-700 p-1 bg-white border rounded-md"
                      title="Delete"
                    >
                      <TrashIcon />
                    </button>
                    <button
                      onClick={() => moveQuestion(index, -1)}
                      className="text-gray-500 hover:text-gray-700 p-1 bg-white border rounded-md"
                      title="Move Up"
                    >
                      <ArrowUpIcon />
                    </button>
                    <button
                      onClick={() => moveQuestion(index, 1)}
                      className="text-gray-500 hover:text-gray-700 p-1 bg-white border rounded-md"
                      title="Move Down"
                    >
                      <ArrowDownIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={addQuestion}
            className="mt-6 flex items-center space-x-2 text-blue-600 font-medium hover:underline"
          >
            <PlusIcon />
            <span>Add Question</span>
          </button>
          <div className="mt-8 flex justify-between">
            <button
              onClick={() =>
                setRoute({ page: "createPoll", step: 1, pollId: poll.id })
              }
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Back
            </button>
            <button
              onClick={() =>
                setRoute({ page: "createPoll", step: 3, pollId: poll.id })
              }
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Save & Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Step 3: Settings & Voters
          </h2>
          <div className="space-y-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">
                General Settings
              </h3>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={poll.settings.allowSkip}
                  onChange={(e) =>
                    setPoll({
                      ...poll,
                      settings: {
                        ...poll.settings,
                        allowSkip: e.target.checked,
                      },
                    })
                  }
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Allow Skip Questions</span>
                <span className="ml-2 text-xs text-gray-500">
                  (If ON, voters may submit with unanswered questions)
                </span>
              </label>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={poll.settings.weightedVotes}
                  onChange={(e) =>
                    setPoll({
                      ...poll,
                      settings: {
                        ...poll.settings,
                        weightedVotes: e.target.checked,
                      },
                    })
                  }
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Weighted Votes</span>
                <span className="ml-2 text-xs text-gray-500">
                  (If OFF, every vote = 1)
                </span>
              </label>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50">
              <h3 className="font-semibold text-gray-700 mb-2">Extension</h3>
              <p className="text-sm text-gray-600">
                You can extend the poll once to any time within +24h of the
                original end time.
              </p>
            </div>
            <VoterLists poll={poll} setPoll={setPoll} />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() =>
                setRoute({ page: "createPoll", step: 2, pollId: poll.id })
              }
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Back
            </button>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSave("DRAFT")}
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
              >
                Save Draft
              </button>
              <button
                onClick={() => handleSave("OPEN")}
                className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
              >
                Open Poll & Invite Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// WF-07 & WF-08: VoterLists
const VoterLists = ({ poll, setPoll }) => {
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

  const handleAddVoter = () => {
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

  const handleEditClick = (voter, field) => {
    setEditingId(`${voter.id}-${field}`);
    setEditingValue(voter[field]);
  };

  useEffect(() => {
    if (editingId) {
      editInputRef.current?.focus();
      editInputRef.current?.select();
    }
  }, [editingId]);

  const handleEditSave = () => {
    if (!editingId) return;
    const [id, field] = editingId.split("-");
    setPoll({
      ...poll,
      voters: poll.voters.map((v) =>
        v.id == id ? { ...v, [field]: editingValue } : v
      ),
    });
    setEditingId(null);
  };

  const handleSendInvites = () => {
    // This is a simulation
    console.log("Sending invites to:", poll.voters);
    poll.voters.forEach((v) => {
      console.log(`  To: ${v.email}, sending poll link.`);
    });
    setShowInviteModal(false);
    setAlert({
      message: `Invitations sent to ${poll.voters.length} voters.`,
      type: "info",
    });
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
        {/* CSV functionality would be implemented with a library like Papaparse */}
        <button
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 disabled:bg-gray-300"
          disabled
        >
          Import CSV
        </button>
        <button
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 disabled:bg-gray-300"
          disabled
        >
          Export CSV
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
                <td
                  className="p-2"
                  onClick={() => handleEditClick(voter, "email")}
                >
                  {editingId === `${voter.id}-email` ? (
                    <input
                      ref={editInputRef}
                      type="email"
                      value={editingValue}
                      onChange={(e) => setEditingValue(e.target.value)}
                      onBlur={handleEditSave}
                      onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
                      className="w-full p-1 border rounded"
                    />
                  ) : (
                    voter.email
                  )}
                </td>
                <td
                  className="p-2"
                  onClick={() => handleEditClick(voter, "name")}
                >
                  {editingId === `${voter.id}-name` ? (
                    <input
                      ref={editInputRef}
                      type="text"
                      value={editingValue}
                      onChange={(e) => setEditingValue(e.target.value)}
                      onBlur={handleEditSave}
                      onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
                      className="w-full p-1 border rounded"
                    />
                  ) : (
                    voter.name
                  )}
                </td>
                <td
                  className="p-2"
                  onClick={() => handleEditClick(voter, "weight")}
                >
                  {editingId === `${voter.id}-weight` ? (
                    <input
                      ref={editInputRef}
                      type="number"
                      step="0.01"
                      value={editingValue}
                      onChange={(e) => setEditingValue(e.target.value)}
                      onBlur={handleEditSave}
                      onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
                      className="w-full p-1 border rounded"
                    />
                  ) : (
                    parseFloat(voter.weight).toFixed(2)
                  )}
                </td>
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
                  placeholder="a.kulkarni@example.com"
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
                  placeholder="Asha Kulkarni"
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
          <p className="text-gray-700 mb-6">
            Send invites to {poll.voters.length} voters for "{poll.title}"?
          </p>
          <p className="text-sm text-gray-500 mb-6">
            - Each will receive a unique poll link via email.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowInviteModal(false)}
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSendInvites}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Send Now
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

// WF-09, 10, 11, 12: Admin Live Poll Dashboard
const LivePollDashboard = ({ route, setRoute, polls, setPolls }) => {
  const poll = polls.find((p) => p.id === route.pollId);
  const [modal, setModal] = useState(null); // 'extend', 'close', 'nonVoters'
  const [extension, setExtension] = useState({
    date: "",
    time: "",
    reason: "",
  });
  const [alert, setAlert] = useState({ message: "", type: "" });

  if (!poll) return <p>Poll not found.</p>;

  const voters = poll.voters || [];
  const votedCount = voters.filter((v) => v.hasVoted).length;
  const nonVotedCount = voters.length - votedCount;
  const nonVoters = voters.filter((v) => !v.hasVoted);

  const handleExtendPoll = () => {
    if (!extension.date || !extension.time) {
      setAlert({
        message: "Please set a new end date and time.",
        type: "error",
      });
      return;
    }
    const newEndTime = new Date(`${extension.date}T${extension.time}`);
    const originalEndTime = new Date(poll.originalEndTime);
    const maxExtensionTime = new Date(
      originalEndTime.getTime() + 24 * 60 * 60 * 1000
    );

    if (newEndTime <= new Date(poll.endTime) || newEndTime > maxExtensionTime) {
      setAlert({
        message: `New end time must be after current end time and within 24h of original end (${formatDateTimeIST(
          maxExtensionTime
        )}).`,
        type: "error",
      });
      return;
    }

    setPolls(
      polls.map((p) =>
        p.id === poll.id
          ? {
              ...p,
              status: "EXTENDED",
              endTime: newEndTime.toISOString(),
              settings: {
                ...p.settings,
                extensionUsed: true,
                extensionReason: extension.reason,
              },
            }
          : p
      )
    );
    setModal(null);
  };

  const handleClosePoll = () => {
    setPolls(
      polls.map((p) =>
        p.id === poll.id
          ? { ...p, status: "CLOSED", endTime: new Date().toISOString() }
          : p
      )
    );
    setModal(null);
    setRoute({ page: "pollResults", pollId: poll.id });
  };

  const handleResend = () => {
    console.log(
      "Resending to non-voters:",
      nonVoters.map((v) => v.email)
    );
    setAlert({
      message: `Resent invites to ${nonVoters.length} non-voters.`,
      type: "info",
    });
    setModal(null);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {poll.status === "EXTENDED" && (
        <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6 text-center">
          Poll extended to {formatDateTimeIST(poll.endTime)}. Votes already cast
          are final.
        </div>
      )}
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{poll.title}</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
          <span>
            Type: <span className="font-semibold">{poll.type}</span>
          </span>
          <span>
            Status:{" "}
            <span
              className={`font-semibold ${
                poll.status === "OPEN" ? "text-green-600" : "text-blue-600"
              }`}
            >
              {poll.status}
            </span>
          </span>
          <span>
            Ends at:{" "}
            <span className="font-semibold">
              {formatDateTimeIST(poll.endTime)}
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-gray-800">
            {voters.length}
          </div>
          <div className="text-sm text-gray-600">Invited</div>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-800">{votedCount}</div>
          <div className="text-sm text-green-600">Voted</div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-red-800">{nonVotedCount}</div>
          <div className="text-sm text-red-600">Not Voted</div>
        </div>
      </div>

      {poll.settings.allowSkip && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">
            Per-question Turnout
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {poll.questions.map((q) => {
              const qVotes = (poll.votes || []).filter(
                (v) => v.questionId === q.id
              ).length;
              const turnout =
                voters.length > 0
                  ? ((qVotes / voters.length) * 100).toFixed(0)
                  : 0;
              return (
                <span key={q.id} className="text-gray-600">
                  Q{q.id}: <span className="font-bold">{turnout}%</span>
                </span>
              );
            })}
          </div>
        </div>
      )}

      <Alert
        message={alert.message}
        type={alert.type}
        onDismiss={() => setAlert({ message: "", type: "" })}
      />

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <button
          onClick={handleResend}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Resend to Non-Voters
        </button>
        <button
          onClick={() => setModal("extend")}
          disabled={poll.settings.extensionUsed}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Extend Poll
        </button>
        <button
          onClick={() => setModal("close")}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Close Now
        </button>
      </div>

      <div className="text-center">
        <button
          onClick={() => setModal("nonVoters")}
          className="text-blue-600 hover:underline"
        >
          View Non-Voters
        </button>
      </div>

      {modal === "nonVoters" && (
        <Modal title="Non-Voters" onClose={() => setModal(null)}>
          <div className="max-h-60 overflow-y-auto bg-gray-50 p-3 rounded-md mb-6">
            <ul className="list-disc list-inside text-gray-700">
              {nonVoters.map((v) => (
                <li key={v.id}>{v.email}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setModal(null)}
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
            <button
              onClick={handleResend}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Resend to All
            </button>
          </div>
        </Modal>
      )}

      {modal === "extend" && (
        <Modal title="Extend Poll" onClose={() => setModal(null)}>
          <Alert
            message={alert.message}
            type={alert.type}
            onDismiss={() => setAlert({ message: "", type: "" })}
          />
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Current end: {formatDateTimeIST(poll.endTime)}
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                New end (within +24h):
              </label>
              <div className="flex gap-2 mt-1">
                <input
                  type="date"
                  value={extension.date}
                  onChange={(e) =>
                    setExtension({ ...extension, date: e.target.value })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="time"
                  value={extension.time}
                  onChange={(e) =>
                    setExtension({ ...extension, time: e.target.value })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Reason:
              </label>
              <input
                type="text"
                value={extension.reason}
                onChange={(e) =>
                  setExtension({ ...extension, reason: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={() => setModal(null)}
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleExtendPoll}
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
            >
              Confirm Extension
            </button>
          </div>
        </Modal>
      )}

      {modal === "close" && (
        <Modal title="Close Poll" onClose={() => setModal(null)}>
          <p className="text-gray-700 mb-2">
            Are you sure you want to close "{poll.title}" now?
          </p>
          <p className="text-sm text-gray-500 mb-6">
            No further votes will be accepted.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setModal(null)}
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleClosePoll}
              className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
            >
              Yes, Close Now
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

// WF-13: Poll Results
const PollResults = ({ route, setRoute, polls }) => {
  const poll = polls.find((p) => p.id === route.pollId);
  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });

  if (!poll) return <p>Poll not found.</p>;

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
    setAlert({ message: "", type: "" });

    let resultsString = "";
    poll.questions.forEach((q, index) => {
      const votesForQ = (poll.votes || []).filter(
        (v) => v.questionId === q.id
      ).length;
      const turnout =
        totalVoters > 0 ? ((votesForQ / totalVoters) * 100).toFixed(0) : 0;
      resultsString += `\nQuestion ${index + 1}: "${
        q.text
      }" (Turnout: ${turnout}%)\n`;
      Object.entries(results[q.id]).forEach(([option, value]) => {
        resultsString += `- ${option}: ${value.toFixed(2)}\n`;
      });
    });

    const prompt = `You are an impartial analyst. Based on the following poll data, provide a brief, neutral executive summary of the results. Do not offer opinions or advice. Focus on the key outcomes and turnout.

Poll Title: ${poll.title}
Poll Type: ${poll.type}
Weighted Votes: ${poll.settings.weightedVotes ? "Yes" : "No"}

Results:${resultsString}

Summary:`;

    const responseText = await callGeminiAPI(prompt);
    setIsGenerating(false);

    if (responseText) {
      setSummary(responseText);
    } else {
      setAlert({
        message: "Failed to generate summary from AI. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{poll.title}</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
          <span>
            Status: <span className="font-semibold text-gray-800">CLOSED</span>
          </span>
          <span>
            Window:{" "}
            <span className="font-semibold">
              {formatDateTimeIST(poll.startTime)} to{" "}
              {formatDateTimeIST(poll.endTime)}
            </span>
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mt-2">
          <span>Weighted: {poll.settings.weightedVotes ? "On" : "Off"}</span>
          <span>Allow Skip: {poll.settings.allowSkip ? "On" : "Off"}</span>
          <span>
            Extension used: {poll.settings.extensionUsed ? "Yes" : "No"}
          </span>
        </div>
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
          const votesForQ = (poll.votes || []).filter(
            (v) => v.questionId === q.id
          ).length;
          const turnout =
            totalVoters > 0 ? ((votesForQ / totalVoters) * 100).toFixed(0) : 0;
          return (
            <div key={q.id} className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-4">
                Q{index + 1}: "{q.text}"
              </h3>
              <div className="space-y-2">
                {Object.entries(results[q.id]).map(([option, value]) => (
                  <div
                    key={option}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700">{option}:</span>
                    <span className="font-bold text-gray-900">
                      {value.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t text-right">
                <span className="text-sm font-semibold text-gray-600">
                  Turnout: {turnout}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4">
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
            className="flex items-center space-x-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-purple-300 transition"
          >
            <SparklesIcon />
            <span>
              {isGenerating ? "Generating..." : "✨ Generate Summary"}
            </span>
          </button>
          <button
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
            disabled
          >
            Export CSV
          </button>
          <button
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-300"
            disabled
          >
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};

// WF-21: Voter Ballot
const VoterBallot = ({ route, setRoute, polls, setPolls, auth }) => {
  const poll = polls.find((p) => p.id === route.pollId);
  const [votes, setVotes] = useState({}); // { [questionId]: option }

  if (!poll) return <p>Poll not found.</p>;

  const handleVote = (questionId, option) => {
    setVotes((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    if (
      !poll.settings.allowSkip &&
      Object.keys(votes).length !== poll.questions.length
    ) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const newVotes = Object.entries(votes).map(([questionId, option]) => ({
      voterId: auth.id,
      questionId: parseInt(questionId),
      option,
    }));

    setPolls((prevPolls) =>
      prevPolls.map((p) => {
        if (p.id === poll.id) {
          return {
            ...p,
            votes: [...(p.votes || []), ...newVotes],
            voters: p.voters.map((v) =>
              v.id === auth.id ? { ...v, hasVoted: true } : v
            ),
          };
        }
        return p;
      })
    );

    setRoute({ page: "voterConfirmation" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="p-4 border-b bg-white">
        <h1 className="text-xl font-bold text-gray-800 text-center">
          {poll.title}
        </h1>
      </header>
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="bg-blue-50 p-4 rounded-md text-center mb-6">
            <p className="text-sm text-blue-700">
              Voting Window: {formatDateTimeIST(poll.startTime)} to{" "}
              {formatDateTimeIST(poll.endTime)}
            </p>
            <p className="text-sm text-blue-700 mt-1">
              Your vote is secret. Results are not visible until the poll is
              closed.
            </p>
          </div>

          <div className="space-y-8">
            {poll.questions.map((q, index) => (
              <div key={q.id}>
                <h2 className="font-semibold text-gray-800 mb-3">
                  Q{index + 1}. {q.text}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {(q.enabledOptions || q.options).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleVote(q.id, opt)}
                      className={`py-2 px-6 rounded-lg font-semibold transition duration-200 border-2 ${
                        votes[q.id] === opt
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-green-700 transition"
            >
              Submit Vote
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// Voter Confirmation Page
const VoterConfirmation = ({ setRoute, setAuth }) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
        <svg
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Your vote has been recorded.
      </h2>
      <p className="text-gray-600 mb-6">Thank you for your participation.</p>
      <p className="text-xs text-gray-500 mb-6">
        Receipt ID: {`VOTE-${Date.now()}`}
      </p>
      <button
        onClick={() => {
          setAuth(null);
          setRoute({ page: "home" });
        }}
        className="text-blue-600 hover:underline"
      >
        Logout
      </button>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [route, setRoute] = useState({ page: "home" });
  const [auth, setAuth] = useState(null); // null, {type: 'admin', ...}, {type: 'voter', ...}
  const [polls, setPolls] = useState(initialPolls);

  const renderPage = () => {
    if (!auth) {
      return <LoginPage setRoute={setRoute} setAuth={setAuth} />;
    }

    if (auth.type === "admin") {
      let content;
      switch (route.page) {
        case "adminDashboard":
          content = (
            <AdminDashboard
              setRoute={setRoute}
              polls={polls}
              setPolls={setPolls}
            />
          );
          break;
        case "createPoll":
          content = (
            <CreatePoll
              setRoute={setRoute}
              route={route}
              polls={polls}
              setPolls={setPolls}
            />
          );
          break;
        case "livePollDashboard":
          content = (
            <LivePollDashboard
              setRoute={setRoute}
              route={route}
              polls={polls}
              setPolls={setPolls}
            />
          );
          break;
        case "pollResults":
          content = (
            <PollResults setRoute={setRoute} route={route} polls={polls} />
          );
          break;
        default:
          content = (
            <AdminDashboard
              setRoute={setRoute}
              polls={polls}
              setPolls={setPolls}
            />
          );
      }
      return (
        <AdminLayout auth={auth} setRoute={setRoute} setAuth={setAuth}>
          {content}
        </AdminLayout>
      );
    }

    if (auth.type === "voter") {
      switch (route.page) {
        case "voterBallot":
          return (
            <VoterBallot
              route={route}
              setRoute={setRoute}
              polls={polls}
              setPolls={setPolls}
              auth={auth}
            />
          );
        case "voterConfirmation":
          return <VoterConfirmation setRoute={setRoute} setAuth={setAuth} />;
        default:
          // If voter is logged in but route is wrong, send back to login
          setAuth(null);
          setRoute({ page: "home" });
          return <LoginPage setRoute={setRoute} setAuth={setAuth} />;
      }
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">{renderPage()}</div>
  );
}
