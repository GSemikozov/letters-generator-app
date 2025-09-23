import { openDB } from 'idb';
import type { DBSchema, IDBPDatabase } from 'idb';
import type { Letter, LetterService } from '../lib/types';

interface LettersDB extends DBSchema {
  letters: {
    key: string;
    value: Letter;
  };
}

class LetterServiceImpl implements LetterService {
  private db: IDBPDatabase<LettersDB> | null = null;

  private async getDB(): Promise<IDBPDatabase<LettersDB>> {
    if (!this.db) {
      this.db = await openDB<LettersDB>('letters-generator', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('letters')) {
            db.createObjectStore('letters', { keyPath: 'id' });
          }
        },
      });
    }
    return this.db;
  }

  async getAllLetters(): Promise<Letter[]> {
    const db = await this.getDB();
    const letters = await db.getAll('letters');
    return letters.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async saveLetter(letterData: Omit<Letter, 'id' | 'createdAt'>): Promise<Letter> {
    const db = await this.getDB();
    const letter: Letter = {
      ...letterData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };

    await db.put('letters', letter);
    return letter;
  }

  async deleteLetter(id: string): Promise<void> {
    const db = await this.getDB();
    await db.delete('letters', id);
  }

  async updateLetter(id: string, letterData: Partial<Letter>): Promise<Letter> {
    const db = await this.getDB();
    const existingLetter = await db.get('letters', id);

    if (!existingLetter) {
      throw new Error('Letter not found');
    }

    const updatedLetter: Letter = {
      ...existingLetter,
      ...letterData,
      id, // Ensure ID doesn't change
    };

    await db.put('letters', updatedLetter);
    return updatedLetter;
  }
}

export const letterService = new LetterServiceImpl();
