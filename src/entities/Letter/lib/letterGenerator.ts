import { getAIServiceType, getOpenAIAPIKey } from '../../../app/config/aiConfig';
import { createAIService } from '../../../shared/api/aiService';
import type { LetterFormData } from '../../../shared/lib/schemas';

const aiService = createAIService(getAIServiceType(), getOpenAIAPIKey());

export async function generateLetter(formData: LetterFormData): Promise<string> {
  return await aiService.generateLetter(formData);
}
