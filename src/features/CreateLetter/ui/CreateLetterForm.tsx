import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  type LetterFormData,
  defaultLetterFormData,
  letterFormSchema,
} from '../../../shared/lib/schemas';
import { useAppStore } from '../../../shared/lib/store';
import { Button } from '../../../shared/ui/Button';
import { CopyButton } from '../../../shared/ui/CopyButton';
import { Input } from '../../../shared/ui/Input';
import { Textarea } from '../../../shared/ui/Textarea';
import { Typography } from '../../../shared/ui/Typography';
import { RepeatIcon } from '../../../shared/ui/icons';
import { useCreateLetter } from '../model/useCreateLetter';
import styles from './CreateLetterForm.module.css';

export const CreateLetterForm = () => {
  const { createLetter, isLoading } = useCreateLetter();
  const [generatedText, setGeneratedText] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LetterFormData>({
    resolver: zodResolver(letterFormSchema),
    defaultValues: defaultLetterFormData,
    mode: 'onChange',
  });

  // Reset form when component mounts (when navigating to /create)
  useEffect(() => {
    reset(defaultLetterFormData);
    setGeneratedText('');
  }, [reset]);

  const handleSuccess = (generatedText: string) => {
    setGeneratedText(generatedText);
  };

  const handleError = (error: string) => {
    // For now, we'll just log the error since react-hook-form handles field errors
    console.error('Form submission error:', error);
  };

  const onSubmit = async (data: LetterFormData) => {
    const result = await createLetter(data);
    if (result.success) {
      // Get the generated text from the store
      const letters = useAppStore.getState().letters;
      const lastLetter = letters[0]; // First letter is the newest
      if (lastLetter) {
        handleSuccess(lastLetter.generatedText);
      }
    } else {
      handleError(result.error || 'Unknown error');
    }
  };

  const handleTryAgain = () => {
    setGeneratedText('');
    reset(defaultLetterFormData);
  };

  return (
    <div className={styles.twoColumnContainer}>
      {/* Left Column - Form */}
      <div className={styles.formColumn}>
        <Typography variant="heading2" className={styles.formTitle}>
          New application
        </Typography>
        <div className={styles.divider} />

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.row}>
            <Input
              id="jobTitle"
              label="Job title"
              {...register('jobTitle')}
              placeholder="e.g., Product manager"
              error={errors.jobTitle?.message}
              required
            />

            <Input
              id="company"
              label="Company"
              {...register('company')}
              placeholder="e.g., Apple"
              error={errors.company?.message}
              required
            />
          </div>

          <Input
            id="skills"
            label="I am good at..."
            {...register('skills')}
            placeholder="e.g., HTML, CSS and doing things in time"
            error={errors.skills?.message}
            required
          />

          <Textarea
            id="additionalDetails"
            label="Additional details"
            {...register('additionalDetails')}
            placeholder="Describe why you are a great fit or paste your bio"
            rows={4}
            maxLength={1200}
            showCharacterCount
            error={errors.additionalDetails?.message}
          />

          <div className={styles.formActions}>
            {generatedText ? (
              <Button
                type="button"
                variant="secondary"
                onClick={handleTryAgain}
                className={styles.tryAgainButton}
              >
                <RepeatIcon size={20} aria-label="Refresh icon" />
                Try Again
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                size="large"
                loading={isLoading}
                loadingText="Generating..."
                disabled={!isValid || isLoading}
                tooltipText={
                  !isValid
                    ? 'Please fill in all required fields (Job title, Company, and Skills)'
                    : undefined
                }
                className={styles.generateButton}
              >
                Generate Now
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Right Column - Preview */}
      <div className={styles.previewColumn}>
        <div className={styles.previewContent}>
          {generatedText ? (
            <div className={styles.previewActions}>
              <pre className={styles.letterText}>{generatedText}</pre>
            </div>
          ) : (
            <div className={styles.emptyPreview}>
              <div className={styles.emptyDescription}>
                Your personalized job application will appear here...
              </div>
            </div>
          )}
          <div className={styles.copyButtonContainer}>
            <CopyButton text={generatedText || ''} variant="ghost" size="medium">
              Copy to clipboard
            </CopyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
