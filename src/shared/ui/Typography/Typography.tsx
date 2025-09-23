import type React from 'react';
import styles from './Typography.module.css';

type TypographyVariant =
  | 'heading1' // 48px, Semi_Bold, -0.96px tracking
  | 'heading2' // 36px, Semi_Bold, -0.72px tracking
  | 'heading3' // 24px, Semi_Bold
  | 'body' // 16px, Regular
  | 'bodyLarge' // 18px, Regular
  | 'bodyMedium' // 16px, Medium
  | 'bodySemibold' // 16px, Semi_Bold
  | 'caption' // 14px, Regular
  | 'small'; // 12px, Regular

type TypographyColor = 'primary' | 'secondary' | 'tertiary' | 'error' | 'success';

type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = 'body',
  color,
  weight,
  as: Component = 'p',
  className = '',
  children,
  ...props
}: TypographyProps) => {
  const variantClass = styles[variant];
  const colorClass = color ? styles[color] : '';
  const weightClass = weight ? styles[weight] : '';

  const combinedClassName = [variantClass, colorClass, weightClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};
