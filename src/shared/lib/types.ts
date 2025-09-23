export interface Letter {
  id: string;
  jobTitle: string;
  company: string;
  skills: string;
  additionalDetails: string;
  generatedText: string;
  createdAt: Date;
}

export interface AppState {
  letters: Letter[];
  goalCount: number;
  isLoading: boolean;
}

export interface LetterService {
  getAllLetters(): Promise<Letter[]>;
  saveLetter(letter: Omit<Letter, 'id' | 'createdAt'>): Promise<Letter>;
  deleteLetter(id: string): Promise<void>;
  updateLetter(id: string, letter: Partial<Letter>): Promise<Letter>;
}
