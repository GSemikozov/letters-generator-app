import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  showCharacterCount?: boolean;
  maxLength?: number;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, success, showCharacterCount, maxLength, className, onChange, ...props },
    ref
  ) => {
    const inputClasses = classNames(
      styles.input,
      { [styles.invalid]: error },
      { [styles.success]: success && !error },
      className
    );

    // Track character count to support uncontrolled usage (e.g., react-hook-form register)
    const initialInputValue = useMemo(() => {
      if (typeof props.value === 'string') return props.value;
      if (typeof props.defaultValue === 'string') return props.defaultValue;
      return '';
    }, [props.value, props.defaultValue]);

    const [characterCount, setCharacterCount] = useState<number>(initialInputValue.length);

    // Sync when controlled value changes from outside
    useEffect(() => {
      if (typeof props.value === 'string') {
        setCharacterCount(props.value.length);
      }
    }, [props.value]);

    const isOverLimit = !!maxLength && characterCount > maxLength;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setCharacterCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className={styles.inputContainer}>
        {label && (
          <label htmlFor={props.id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={inputClasses}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
        />
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
