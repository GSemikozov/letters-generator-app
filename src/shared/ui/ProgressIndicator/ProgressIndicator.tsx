import classNames from 'classnames';
import { CheckIcon } from '../icons';
import styles from './ProgressIndicator.module.css';

export interface ProgressIndicatorProps {
  current: number;
  total: number;
  variant?: 'dots' | 'bars';
  showText?: boolean;
  className?: string;
}

export const ProgressIndicator = ({
  current,
  total,
  variant = 'dots',
  showText = true,
  className,
}: ProgressIndicatorProps) => {
  const isComplete = current >= total;
  const progress = Math.min(current, total);

  if (isComplete) {
    return (
      <div className={classNames(styles.container, styles.success, className)}>
        {showText && (
          <span className={styles.text}>
            {current}/{total} applications generated
          </span>
        )}
        <div className={styles.checkmark}>
          <CheckIcon size={28} aria-label="Success checkmark" />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.container, className)}>
      {showText && (
        <span className={styles.text}>
          {current}/{total} applications generated
        </span>
      )}
      <div className={variant === 'dots' ? styles.dots : styles.bars}>
        {Array.from({ length: total }, (_, index) => (
          <div
            key={`progress-${index}-${total}`}
            className={classNames(
              variant === 'dots' ? styles.dot : styles.bar,
              index < progress && (variant === 'dots' ? styles.dotFilled : styles.barFilled)
            )}
          />
        ))}
      </div>
    </div>
  );
};
