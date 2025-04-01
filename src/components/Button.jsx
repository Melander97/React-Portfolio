import React from "react";

export default function Button({ children, variant = "primary", onClick }) {
  const baseStyles =
    "px-6 py-2 rounded font-semibold transition-colors cursor-pointer";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
