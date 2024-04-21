import { Router } from 'express';
import { validateData } from './middleware/dataValidation';

import { signin, signup } from './controller/authController';
import { status } from './controller/statusController';

import { SigninSchema, SignupSchema } from './schemas/authSchema';

export const router = Router();
/// Unprotected routes
{
  // Status
  router.get('/status', status);

  // Authentication
  router.post('/auth/signin', validateData(SigninSchema), signin);
  router.post('/auth/signup', validateData(SignupSchema), signup);
}

/// Protected routes
{

}
