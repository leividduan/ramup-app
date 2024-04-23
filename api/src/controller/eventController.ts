import { Request, Response } from 'express';
import { db } from '../db/db';
import { CustomRequest } from '../middleware/jwtValidation';

export async function create(req: Request, res: Response) {
  try {
    const currentUser = (req as CustomRequest).user;
    const {
      name,
      description,
      city,
      state,
      country,
      zipCode,
      onlyAdults,
      showUsers,
    } = req.body;

    const eventWithSameEmail = await db.event.findFirst({where: {
      name
    }});

    if (eventWithSameEmail) {
      return res.status(400).json({ error: 'Invalid data', details:[{message:'name Is already in use'}]});
    }

    const event = await db.event.create({
      data:{
        name,
        description,
        city,
        state,
        country,
        zipCode,
        onlyAdults,
        showUsers,
        userId: currentUser!.id
      }});

    res.status(201).json(event);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
