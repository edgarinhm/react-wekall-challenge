import { ChangeEvent, forwardRef } from "react";

import styles from "./text-area.module.scss";

export interface InputProps {
  name: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string;
  type?: string;
  onFocus?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  autocomplete?: string;
  isVisibleRequiredIcon?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  (
    {
      name,
      value,
      onChange,
      label,
      placeholder,
      className,
      required = false,
      error,
      onFocus,
      disabled = false,
      autocomplete = "off",
      isVisibleRequiredIcon = false,
    },
    ref
  ) => {
    return (
      <div className={`input-container ${className}`}>
        {label && (
          <div className={styles.input_label}>
            <label htmlFor={name}>
              {label} {isVisibleRequiredIcon && <span>*</span>}
            </label>
          </div>
        )}
        <div>
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
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

export default TextArea;
