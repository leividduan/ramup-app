import { Router } from 'express';
import { signin } from './useCases/auth/signin';

export const router = Router();

router.get('/auth/signin', signin);
