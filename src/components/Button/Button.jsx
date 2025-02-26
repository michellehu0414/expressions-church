import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  to, // Internal link
  href, // External link
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const buttonClass = `${[variant]} ${className}`;

  // ✅ Use <Link> for Internal Navigation (React Router)
  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  // ✅ Use <a> for External Links
  if (href) {
    return (
      <a href={href} className={buttonClass} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  // ✅ Default: Render a Normal <button>
  return (
    <Button className={buttonClass} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </Button>
  );
};

export default Button;

// Usage example ----------------------------------------------------------
//<Button href="https://example.com">Visit Example</Button>
//<Button to="/about">Go to About Page</Button>
