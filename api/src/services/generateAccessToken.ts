import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export function generateAccessToken(user: User) {
  return jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.TOKEN_SECRET as string, { expiresIn: '8h' });
}
