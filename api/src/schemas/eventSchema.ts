import { z } from 'zod';

export const EventSchema = z.object({
  name: z.string().min(5).max(150),
  description: z.string().max(500),
  city: z.string().min(3).max(50),
  state: z.string().min(3).max(50),
  country: z.string().min(3).max(50),
  zipCode: z.string().regex(/^\d{5}-\d{3}$/),
  latitude: z.string().regex(/^-?([1-8]?\d(\.\d{1,6})?|90(\.0{1,6})?)$/),
  longitude: z.string().regex( /^-?((\d|[1-9]\d|1[0-7]\d)(\.\d{1,6})?|180(\.0{1,6})?)$/),
  onlyAdults: z.boolean().default(false),
  showUsers: z.boolean().default(true)
});
