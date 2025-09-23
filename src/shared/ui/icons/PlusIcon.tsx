interface PlusIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export const PlusIcon = ({ size = 24, className = '', 'aria-label': ariaLabel }: PlusIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={ariaLabel || 'Plus icon'}
    >
      <title>{ariaLabel || 'Plus icon'}</title>
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
