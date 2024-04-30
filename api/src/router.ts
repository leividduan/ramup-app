import { Router } from 'express';
import { validateData } from './middleware/dataValidation';
import { validateJwt } from './middleware/jwtValidation';
import { SigninSchema, SignupSchema } from './schemas/authSchema';
import { EventSchema } from './schemas/eventSchema';

import authController from './controller/authController';
import eventController from './controller/eventController';
import statusController from './controller/statusController';

export const router = Router();
//// Unprotected routes
// Status
router.get('/status', statusController.status);

// Authentication
router.post('/auth/signin', validateData(SigninSchema), authController.signin);
router.post('/auth/signup', validateData(SignupSchema), authController.signup);


//// Protected routes

// Events
router.get('/events', validateJwt, eventController.listAll);
router.get('/events/mine', validateJwt, eventController.listMine);
router.get('/events/:id', validateJwt, eventController.listById);
router.post('/events', validateJwt, validateData(EventSchema), eventController.create);
router.put('/events/:id', validateJwt, validateData(EventSchema), eventController.update);
router.delete('/events/:id', validateJwt, eventController.remove);
// Inscriptions
