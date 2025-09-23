import { z } from 'zod';

export const letterFormSchema = z.object({
  jobTitle: z
    .string()
    .min(1, 'Job Title is required')
    .min(2, 'Job Title must be at least 2 characters')
    .max(100, 'Job Title must be less than 100 characters')
    .trim(),

  company: z
    .string()
    .min(1, 'Company is required')
    .min(2, 'Company must be at least 2 characters')
    .max(100, 'Company must be less than 100 characters')
    .trim(),

  skills: z
    .string()
    .min(1, 'Skills are required')
    .min(10, 'Skills must be at least 10 characters')
    .max(500, 'Skills must be less than 500 characters')
    .trim(),

  additionalDetails: z
    .string()
    .max(1200, 'Additional details must be less than 1200 characters')
    .trim()
    .optional()
    .or(z.literal('')),
});

export type LetterFormData = z.infer<typeof letterFormSchema>;

export const defaultLetterFormData: LetterFormData = {
  jobTitle: '',
  company: '',
  skills: '',
  additionalDetails: '',
};
