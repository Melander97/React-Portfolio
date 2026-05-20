import React from "react";

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  type = "button",
  className = "",
  ...rest
}) {
  const baseStyles =
    "inline-block px-6 py-2 rounded font-semibold transition-colors cursor-pointer";
  const variantStyles = {
    primary: "bg-yellow-300 text-black hover:bg-yellow-400",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    outline:
      "border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const handleClick = (e) => {
    // Smooth scroll for in-page anchors
    if (href?.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.(e);
  };

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
