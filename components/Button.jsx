import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <button
      className="bg-blue-500 px-4 py-1 rounded-md text-gray-50 w-fit active:translate-y-1 hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};