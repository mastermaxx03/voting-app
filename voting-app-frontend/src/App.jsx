// src/App.jsx

import React, { useState } from "react";
import { initialPolls } from "./constants/mockData";
import "./App.css"; // Keep your existing App styles

// Page Imports
import LoginPage from "./pages/Auth/LoginPage";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreatePoll from "./pages/Admin/CreatePoll";
import LivePollDashboard from "./pages/Admin/LivePollDashboard";
import PollResults from "./pages/Admin/PollResults";
import VoterBallot from "./pages/Voter/VoterBallot";
import VoterConfirmation from "./pages/Voter/VoterConfirmation";

export default function App() {
  const [route, setRoute] = useState({ page: "home" });
  const [auth, setAuth] = useState(null);
  const [polls, setPolls] = useState(initialPolls);

  const renderPage = () => {
    // For easier development, you can uncomment the line below to bypass login
    // if (!auth) { setAuth({ type: 'admin', name: 'Admin User' }); }

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
          setAuth(null);
          setRoute({ page: "home" });
          return <LoginPage setRoute={setRoute} setAuth={setAuth} />;
      }
    }
  };

  // The className here matches the default from Vite's template.
  // The content is now managed by our renderPage function.
  return <div className="App">{renderPage()}</div>;
}
