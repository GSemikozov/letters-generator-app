import classNames from 'classnames';
import type React from 'react';
import { useCopyToClipboard } from '../../lib/hooks/useCopyToClipboard';
import { Button } from '../Button';
import { CheckIcon, CopyIcon } from '../icons';
import styles from './CopyButton.module.css';

interface CopyButtonProps {
  text: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onCopy?: (success: boolean) => void;
}

export const CopyButton = ({
  text,
  children = 'Copy',
  variant = 'ghost',
  size = 'medium',
  className = '',
  onCopy,
}: CopyButtonProps) => {
  const { copyToClipboard, isCopied, error } = useCopyToClipboard();

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    onCopy?.(success);
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={classNames(styles.copyButton, variant === 'ghost' && styles.compact, className)}
      disabled={!!error}
      icon={
        isCopied ? (
          <CheckIcon size={20} aria-label="Copied!" />
        ) : (
          <CopyIcon size={20} aria-label="Copy to clipboard" />
        )
      }
      iconPosition="right"
    >
      {isCopied ? 'Copied!' : children}
    </Button>
  );
};
