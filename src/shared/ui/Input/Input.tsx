import classNames from 'classnames';
import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  showCharacterCount?: boolean;
  maxLength?: number;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, showCharacterCount, maxLength, className, ...props }, ref) => {
    const inputClasses = classNames(
      styles.input,
      { [styles.invalid]: error },
      { [styles.success]: success && !error },
      className
    );

    const characterCount = props.value ? String(props.value).length : 0;
    const isOverLimit = maxLength && characterCount > maxLength;

    return (
      <div className={styles.inputContainer}>
        {label && (
          <label htmlFor={props.id} className={styles.label}>
            {label}
          </label>
        )}
        <input ref={ref} className={inputClasses} maxLength={maxLength} {...props} />
        {showCharacterCount && maxLength && (
          <div className={classNames(styles.characterCount, { [styles.error]: isOverLimit })}>
            {characterCount}/{maxLength}
          </div>
        )}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
);
