import type React from 'react';
import { Container } from '../../../shared/ui/Container';
import { Header } from '../Header';
import styles from './Layout.module.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Container size="xl">{children}</Container>
      </main>
    </div>
  );
};
