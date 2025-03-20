import React from "react";
import "./Button.scss";

const Button = ({ href, children, variant = "default", className = "", ...props }) => {
  const buttonClass = `${variant || ""} ${className}`.trim();

  return (
    <a href={href} className={buttonClass} {...props}>
      {children}
    </a>
  );
};

export default Button;

// how to use
// <Button href="https://www.google.com" variant="primary">Click me</Button>