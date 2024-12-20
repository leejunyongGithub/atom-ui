import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
}

const Input = ({ variant = "primary", ...props }: InputProps) => {
  return <input {...props} />;
};

export default Input;
