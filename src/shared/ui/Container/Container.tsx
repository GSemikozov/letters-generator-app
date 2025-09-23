import type React from 'react';
import styles from './Container.module.css';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: React.ElementType;
}

export const Container = ({
  children,
  className = '',
  size = 'xl',
  as: Component = 'div',
}: ContainerProps) => {
  const containerClasses = [styles.container, styles[size], className].filter(Boolean).join(' ');

  return <Component className={containerClasses}>{children}</Component>;
};
