import classNames from 'classnames';
import type React from 'react';
import { Button } from '../Button';
import { CopyButton } from '../CopyButton';
import { TrashIcon } from '../icons';
import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface LetterCardProps {
  text: string;
  onDelete: () => void;
  onCopy: () => void;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};

export const LetterCard = ({ text, onDelete, onCopy, className }: LetterCardProps) => {
  return (
    <Card className={className}>
      <div className={styles.compactContent}>
        <div className={styles.compactTextContainer}>
          <p className={styles.compactText}>{text}</p>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={styles.actions}>
          <Button
            type="button"
            variant="ghost"
            size="small"
            onClick={onDelete}
            className={classNames(styles.actionButton, styles.deleteButton)}
          >
            <TrashIcon size={20} aria-label="Delete icon" />
            Delete
          </Button>
          <CopyButton
            text={text}
            variant="ghost"
            size="small"
            onCopy={onCopy}
            className={styles.actionButton}
          >
            Copy to clipboard
          </CopyButton>
        </div>
      </div>
    </Card>
  );
};

export const EmptyCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card>
      <div className={styles.empty}>
        <div className={styles.emptyText}>{children}</div>
      </div>
    </Card>
  );
};
