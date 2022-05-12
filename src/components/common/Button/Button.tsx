import { forwardRef } from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  icon?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { label, onClick, disabled = false, type = "button", icon, className = "" },
    ref
  ) => {
    return (
      <button
        data-testid={type}
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`${className} ${styles.button}`}
        ref={ref}
      >
        {icon && <img src={icon} alt="icon" />}
        {label}
      </button>
    );
  }
);

export default Button;
