import { zodResolver } from '@hookform/resolvers/zod';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
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

export interface CreateLetterFormRef {
  clearForm: () => void;
}

export const CreateLetterForm = forwardRef<CreateLetterFormRef>((_, ref) => {
  const { createLetter, regenerateLetter, isLoading } = useCreateLetter();
  const [generatedText, setGeneratedText] = useState<string>('');
  const [currentLetterId, setCurrentLetterId] = useState<string | null>(null);

  const formConfig = {
    resolver: zodResolver(letterFormSchema),
    defaultValues: defaultLetterFormData,
    mode: 'onChange' as const,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<LetterFormData>(formConfig);

  const formValues = watch();
  const { jobTitle, company } = formValues;

  const hasAnyContent = jobTitle || company;
  const titleContent = hasAnyContent
    ? [jobTitle, company].filter(Boolean).join(', ')
    : 'New application';
  const titleColor = hasAnyContent ? 'primary' : 'secondary';

  useEffect(() => {
    reset(defaultLetterFormData);
    setGeneratedText('');
    setCurrentLetterId(null);
  }, [reset]);

  // Expose clearForm method to parent components
  useImperativeHandle(
    ref,
    () => ({
      clearForm: () => {
        reset(defaultLetterFormData);
        setGeneratedText('');
        setCurrentLetterId(null);
      },
    }),
    [reset]
  );

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
      const letters = useAppStore.getState().letters;
      const lastLetter = letters[0]; // First letter is the newest
      if (lastLetter) {
        setCurrentLetterId(lastLetter.id);
        handleSuccess(lastLetter.generatedText);
      }
    } else {
      handleError(result.error || 'Unknown error');
    }
  };

  const handleTryAgain = async () => {
    if (!currentLetterId) return;

    const formData = {
      jobTitle: watch('jobTitle'),
      company: watch('company'),
      skills: watch('skills'),
      additionalDetails: watch('additionalDetails') || '',
    };

    const result = await regenerateLetter(currentLetterId, formData);
    if (result.success) {
      const letters = useAppStore.getState().letters;
      const updatedLetter = letters.find((letter) => letter.id === currentLetterId);
      if (updatedLetter) {
        handleSuccess(updatedLetter.generatedText);
      }
    } else {
      handleError(result.error || 'Failed to regenerate letter');
    }
  };

  return (
    <div className={styles.twoColumnContainer}>
      {/* Left Column - Form */}
      <div className={styles.formColumn}>
        <Typography variant="heading2" className={styles.formTitle} color={titleColor}>
          {titleContent}
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
                size="large"
                onClick={handleTryAgain}
                loading={isLoading}
                className={styles.tryAgainButton}
              >
                {!isLoading && (
                  <>
                    <RepeatIcon size={20} aria-label="Refresh icon" />
                    Try Again
                  </>
                )}
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                size="large"
                loading={isLoading}
                disabled={!isValid}
                tooltipText={
                  !isValid
                    ? 'Please fill in all required fields (Job title, Company, and Skills)'
                    : undefined
                }
                className={styles.generateButton}
              >
                {!isLoading && 'Generate Now'}
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Right Column - Preview */}
      <div className={styles.previewColumn}>
        <div className={styles.previewContent}>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner} />
            </div>
          ) : generatedText ? (
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
          {!isLoading && (
            <div className={styles.copyButtonContainer}>
              <CopyButton text={generatedText || ''} variant="ghost">
                Copy to clipboard
              </CopyButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
