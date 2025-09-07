import React from "react";

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

export default Modal;
