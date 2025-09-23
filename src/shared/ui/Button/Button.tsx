import classNames from 'classnames';
import type React from 'react';
import { LoadingIcon } from '../icons';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  loadingText?: string;
  tooltipText?: string;
  children?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  loading = false,
  loadingText,
  tooltipText,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    { [styles.loading]: loading },
    className
  );

  const isDisabled = disabled;

  return (
    <button className={buttonClasses} disabled={isDisabled} title={tooltipText} {...props}>
      {loading ? (
        <>
          <LoadingIcon size={size === 'large' ? 24 : 20} aria-label="Loading" />
          {loadingText || children}
        </>
      ) : variant === 'icon' ? (
        icon
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className={styles.iconSlot}>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className={styles.iconSlot}>{icon}</span>}
        </>
      )}
    </button>
  );
};
