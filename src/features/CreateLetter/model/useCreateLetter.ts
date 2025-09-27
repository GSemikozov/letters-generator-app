import type { LetterFormData } from '../../../shared/lib/schemas';
import { useAppStore } from '../../../shared/lib/store';

export const useCreateLetter = () => {
  const { createLetter, regenerateLetter, isLoading } = useAppStore();

  const handleCreateLetter = async (formData: LetterFormData) => {
    return await createLetter(formData);
  };

  const handleRegenerateLetter = async (id: string, formData: LetterFormData) => {
    return await regenerateLetter(id, formData);
  };

  return {
    createLetter: handleCreateLetter,
    regenerateLetter: handleRegenerateLetter,
    isLoading,
  };
};
