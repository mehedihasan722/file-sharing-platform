import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <p>This is the dashboard layout.</p>
      {children}
    </div>
  );
};

export default layout;
