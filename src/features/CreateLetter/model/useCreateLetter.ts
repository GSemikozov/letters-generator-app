import type { LetterFormData } from '../../../shared/lib/schemas';
import { useAppStore } from '../../../shared/lib/store';

export const useCreateLetter = () => {
  const { createLetter, isLoading } = useAppStore();

  const handleCreateLetter = async (formData: LetterFormData) => {
    return await createLetter(formData);
  };

  return {
    createLetter: handleCreateLetter,
    isLoading,
  };
};
