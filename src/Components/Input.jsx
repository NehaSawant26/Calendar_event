import React from 'react';

const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border px-4 py-2 rounded-lg w-full ${className}`}
      {...props}
    />
  );
};

export default Input;
