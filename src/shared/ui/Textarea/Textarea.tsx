import classNames from 'classnames';
import React from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: boolean;
  showCharacterCount?: boolean;
  maxLength?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, success, showCharacterCount, maxLength, className, ...props }, ref) => {
    const textareaClasses = classNames(
      styles.textarea,
      { [styles.invalid]: error },
      { [styles.success]: success && !error },
      className
    );

    const characterCount = props.value ? String(props.value).length : 0;
    const isOverLimit = maxLength && characterCount > maxLength;

    return (
      <div className={styles.textareaContainer}>
        {label && (
          <label htmlFor={props.id} className={styles.label}>
            {label}
          </label>
        )}
        <textarea ref={ref} className={textareaClasses} maxLength={maxLength} {...props} />
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
