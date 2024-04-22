import { z } from 'zod';

export const EventSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.string(),
  onlyAdults: z.boolean(),
  showUsers: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
});
