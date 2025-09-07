import React from "react";
import { UserCircleIcon } from "../../components/icons";

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

export default AdminLayout;
