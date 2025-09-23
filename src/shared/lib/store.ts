import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { APP_CONFIG } from '../../app/config';
import { generateLetter } from '../../entities/Letter/lib/letterGenerator';
import { letterService } from '../api/letterService';
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
          set({ letters });
        } catch (error) {
          console.error('Не удалось загрузить письма:', error);
        } finally {
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
          }));

          return { success: true };
        } catch (error) {
          console.error('Не удалось создать письмо:', error);
          return { success: false, error: 'Failed to create letter' };
        } finally {
          set({ isLoading: false });
        }
      },

      deleteLetter: async (id: string) => {
        set({ isLoading: true });
        try {
          await letterService.deleteLetter(id);
          set((state) => ({
            letters: state.letters.filter((letter) => letter.id !== id),
          }));
        } catch (error) {
          console.error('Не удалось удалить письмо:', error);
        } finally {
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
