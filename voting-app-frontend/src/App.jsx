import React, { useState } from "react";
import { initialPolls } from "./constants/mockData";
import "./App.css";

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
    // If user not authenticated, show login page
    if (!auth) {
      return <LoginPage setRoute={setRoute} setAuth={setAuth} />;
    }

    // Admin routes
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
              auth={auth}
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

    // Voter routes
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
          // On unknown voter route, fallback to login and clear auth
          setAuth(null);
          setRoute({ page: "home" });
          return <LoginPage setRoute={setRoute} setAuth={setAuth} />;
      }
    }

    // Fallback to login for any unknown auth type or error
    return <LoginPage setRoute={setRoute} setAuth={setAuth} />;
  };

  return <div className="App">{renderPage()}</div>;
}
