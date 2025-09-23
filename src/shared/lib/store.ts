import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { APP_CONFIG } from '../../app/config';
import { letterService } from '../api/letterService';
import { generateLetter } from './letterGenerator';
import type { LetterFormData } from './schemas';
import type { AppState } from './types';

interface AppStore extends AppState {
  // Actions
  loadLetters: () => Promise<void>;
  createLetter: (formData: LetterFormData) => Promise<{ success: boolean; error?: string }>;
  deleteLetter: (id: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppStore>()(
  devtools(
    (set) => ({
      letters: [],
      goalCount: APP_CONFIG.GOAL_COUNT,
      isLoading: false,

      loadLetters: async () => {
        set({ isLoading: true });
        try {
          const letters = await letterService.getAllLetters();
          set({ letters, isLoading: false });
        } catch (error) {
          console.error('Failed to load letters:', error);
          set({ isLoading: false });
        }
      },

      createLetter: async (formData: LetterFormData) => {
        set({ isLoading: true });
        try {
          const generatedText = generateLetter(formData);
          const letter = await letterService.saveLetter({
            ...formData,
            additionalDetails: formData.additionalDetails || '',
            generatedText,
          });

          set((state) => ({
            letters: [letter, ...state.letters],
            isLoading: false,
          }));

          return { success: true };
        } catch (error) {
          console.error('Failed to create letter:', error);
          set({ isLoading: false });
          return { success: false, error: 'Failed to create letter' };
        }
      },

      deleteLetter: async (id: string) => {
        set({ isLoading: true });
        try {
          await letterService.deleteLetter(id);
          set((state) => ({
            letters: state.letters.filter((letter) => letter.id !== id),
            isLoading: false,
          }));
        } catch (error) {
          console.error('Failed to delete letter:', error);
          set({ isLoading: false });
        }
      },

      setLoading: (loading: boolean) => set({ isLoading: loading }),
    }),
    {
      name: 'letters-generator-store',
    }
  )
);
