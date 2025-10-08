import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: boolean;
  showCharacterCount?: boolean;
  maxLength?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, success, showCharacterCount, maxLength, className, onChange, ...props },
    ref
  ) => {
    const textareaClasses = classNames(
      styles.textarea,
      { [styles.invalid]: error },
      { [styles.success]: success && !error },
      className
    );

    // Track character count so it works with uncontrolled usage (e.g., react-hook-form register)
    const initialTextValue = useMemo(() => {
      if (typeof props.value === 'string') return props.value;
      if (typeof props.defaultValue === 'string') return props.defaultValue;
      return '';
    }, [props.value, props.defaultValue]);

    const [characterCount, setCharacterCount] = useState<number>(initialTextValue.length);

    // Sync when controlled value changes from outside
    useEffect(() => {
      if (typeof props.value === 'string') {
        setCharacterCount(props.value.length);
      }
    }, [props.value]);

    const isOverLimit = !!maxLength && characterCount > maxLength;

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      setCharacterCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className={styles.textareaContainer}>
        {label && (
          <label htmlFor={props.id} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaClasses}
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
