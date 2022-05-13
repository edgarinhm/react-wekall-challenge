import { ChangeEvent, forwardRef } from "react";
import styles from "./input.module.scss";

export interface InputProps {
  name: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string;
  type?: string;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  autocomplete?: string;
  isVisibleRequiredIcon?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      value,
      onChange,
      label,
      placeholder,
      required = false,
      error,
      type = "text",
      onFocus,
      disabled = false,
      autocomplete = "off",
      isVisibleRequiredIcon = false,
      className,
    },
    ref
  ) => {
    return (
      <div className={styles.container}>
        {label && (
          <div className={styles.label}>
            <label htmlFor={name}>
              {label} {isVisibleRequiredIcon && <span>*</span>}
            </label>
          </div>
        )}
        <div className={className}>
          <input
            name={name}
            defaultValue={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className={styles.input}
            type={type}
            required={required}
            disabled={disabled}
            ref={ref}
            autoComplete={autocomplete}
          />
          {error && <div className={styles.error}>{error}</div>}
        </div>
      </div>
    );
  }
);

export default Input;
