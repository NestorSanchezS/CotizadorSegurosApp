import React from "react";

export const Error = ({ children }) => {
  return (
    <div className="text-center py-2 text-red-600 border border-red-400 bg-red-100">
      {children}
    </div>
  );
};
