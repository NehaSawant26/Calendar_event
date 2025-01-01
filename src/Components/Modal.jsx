import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button onClick={onClose} className="text-black bg-gray-200 px-3 py-1 rounded-lg mb-4">
          Close
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
