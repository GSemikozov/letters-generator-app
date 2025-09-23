import { useCallback, useState } from 'react';

interface UseCopyToClipboardReturn {
  copyToClipboard: (text: string) => Promise<boolean>;
  isCopied: boolean;
  error: string | null;
}

export const useCopyToClipboard = (): UseCopyToClipboardReturn => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API not available');
      }

      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setError(null);

      // Reset copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);

      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to copy text';
      setError(errorMessage);
      setIsCopied(false);
      return false;
    }
  }, []);

  return {
    copyToClipboard,
    isCopied,
    error,
  };
};
