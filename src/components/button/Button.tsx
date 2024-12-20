import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button = ({ variant = "primary", size = "medium", children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
