import type React from 'react';
import { useEffect } from 'react';
import { useAppStore } from '../../shared/lib/store';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const { loadLetters } = useAppStore();

  useEffect(() => {
    // Initialize app data on startup
    loadLetters();
  }, [loadLetters]);

  return <>{children}</>;
};
