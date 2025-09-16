import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${styles.base} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
