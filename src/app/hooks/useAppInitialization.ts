import { useEffect } from 'react';
import { useAppStore } from '../../shared/lib/store';

export const useAppInitialization = () => {
  const { loadLetters } = useAppStore();

  useEffect(() => {
    // Initialize app on mount
    const initializeApp = async () => {
      try {
        await loadLetters();
      } catch (error) {
        console.error('Failed to initialize app:', error);
      }
    };

    initializeApp();
  }, [loadLetters]);
};
