import { Router } from 'express';
import { validateData } from './middleware/dataValidation';

import { signin, signup } from './controller/authController';

import { create } from './controller/eventController';
import { status } from './controller/statusController';
import { validateJwt } from './middleware/jwtValidation';
import { SigninSchema, SignupSchema } from './schemas/authSchema';
import { EventSchema } from './schemas/eventSchema';

export const router = Router();
//// Unprotected routes
// Status
router.get('/status', status);

// Authentication
router.post('/auth/signin', validateData(SigninSchema), signin);
router.post('/auth/signup', validateData(SignupSchema), signup);


//// Protected routes

// Events
router.post('/events', validateJwt, validateData(EventSchema), create)
// Inscriptions
