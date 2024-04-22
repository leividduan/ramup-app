import { z } from 'zod';

export const SigninSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  birthday: z.string().pipe(z.coerce.date())
});

export const SignupSchema = z.object({
  email: z.string(),
  password: z.string().min(8),
});
