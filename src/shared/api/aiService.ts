import type { LetterFormData } from '../lib/schemas';

export interface AIService {
  generateLetter(formData: LetterFormData): Promise<string>;
}

export class OpenAIService implements AIService {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateLetter(formData: LetterFormData): Promise<string> {
    const { jobTitle, company, skills, additionalDetails } = formData;

    const prompt = `Write a professional cover letter for the following job application:

Job Title: ${jobTitle}
Company: ${company}
Skills: ${skills}
Additional Details: ${additionalDetails || 'None provided'}

Requirements:
- Professional and engaging tone
- Highlight relevant skills and experience
- Show enthusiasm for the role
- Keep it concise but comprehensive
- Use proper business letter format
- Address the letter to the company team

Please write a compelling cover letter that would make the candidate stand out.`;

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                "You are a professional career advisor who writes compelling cover letters. Write in a professional, engaging tone that highlights the candidate's strengths and enthusiasm for the role.",
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Failed to generate letter';
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw new Error('Failed to generate letter with AI');
    }
  }
}

export class MockAIService implements AIService {
  async generateLetter(formData: LetterFormData): Promise<string> {
    const { jobTitle, company, skills, additionalDetails } = formData;

    // Simulate AI generation delay (2-3 seconds)
    const delay = Math.random() * 1000 + 2000; // 2000-3000ms
    await new Promise((resolve) => setTimeout(resolve, delay));

    return `Dear ${company} Team,

I am writing to express my strong interest in the ${jobTitle} position at ${company}.

With my expertise in ${skills}, I am confident that I would be a valuable addition to your team. ${additionalDetails || 'My passion for this field and commitment to excellence drive me to seek this opportunity.'}

I am excited about the possibility of contributing to ${company}'s continued success and would welcome the opportunity to discuss how my skills and experience align with your needs.

Thank you for considering my application. I look forward to hearing from you soon.

Best regards,
[Your Name]`;
  }
}

// Factory function to create AI service
export function createAIService(type: 'openai' | 'mock' = 'mock', apiKey?: string): AIService {
  switch (type) {
    case 'openai':
      if (!apiKey) {
        console.warn('OpenAI API key not provided. Falling back to mock service.');
        return new MockAIService();
      }
      return new OpenAIService(apiKey);
    default:
      return new MockAIService();
  }
}
