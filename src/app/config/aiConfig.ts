// AI Configuration
export const AI_CONFIG = {
  // Current AI service type
  SERVICE_TYPE: 'openai' as 'openai' | 'mock',

  // Generation settings
  GENERATION_DELAY: {
    MIN: 2000, // 2 seconds
    MAX: 3000, // 3 seconds
  },
} as const;

// Helper function to get AI service type
export function getAIServiceType(): 'openai' | 'mock' {
  return AI_CONFIG.SERVICE_TYPE;
}

// Helper function to get API key from environment variables
export function getOpenAIAPIKey(): string {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    console.warn(
      'VITE_OPENAI_API_KEY not found in environment variables. Falling back to mock mode.'
    );
    return '';
  }

  return apiKey;
}
