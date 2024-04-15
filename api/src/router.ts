import { Router } from 'express';
import { test } from './useCases/test';

export const router = Router();

router.get('/categories', test);
