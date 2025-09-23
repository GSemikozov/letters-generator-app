import styles from './LoadingIcon.module.css';

interface LoadingIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export const LoadingIcon = ({
  size = 24,
  className = '',
  'aria-label': ariaLabel,
}: LoadingIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.loadingIcon} ${className}`}
      aria-label={ariaLabel || 'Loading icon'}
    >
      <title>{ariaLabel || 'Loading icon'}</title>
      <path
        d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
