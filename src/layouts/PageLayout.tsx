import React from "react";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
