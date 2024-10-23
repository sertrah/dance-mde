import React from "react";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button className="button-large">{children}</button>;
};

export default Button;
