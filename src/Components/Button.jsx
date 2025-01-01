import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;