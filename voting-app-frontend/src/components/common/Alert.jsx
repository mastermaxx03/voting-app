import React from "react";

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

export default Alert;
