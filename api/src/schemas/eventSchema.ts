import { z } from 'zod';

export const EventSchema = z.object({
  name: z.string().min(5).max(150),
  description: z.string().max(500),
  city: z.string().min(3).max(50),
  state: z.string().min(3).max(50),
  country: z.string().min(3).max(50),
  zipCode: z.string().regex(/^\d{5}-\d{3}$/),
  onlyAdults: z.boolean().default(false),
  showUsers: z.boolean().default(true)
});
