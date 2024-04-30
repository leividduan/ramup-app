import { Request, Response } from 'express';
import { db } from '../db/db';
import { CustomRequest } from '../middleware/jwtValidation';

const create = async (req: Request, res: Response) => {
  try {
    const currentUser = (req as CustomRequest).user;
    const {
      name,
      description,
      city,
      state,
      country,
      zipCode,
      latitude,
      longitude,
      onlyAdults,
      showUsers,
    } = req.body;

    const eventWithSameEmail = await db.event.findFirst({where: {
      name
    }});

    if (eventWithSameEmail) {
      return res.status(400).json({ error: 'Invalid name'});
    }

    const event = await db.event.create({
      data:{
        name,
        description,
        city,
        state,
        country,
        zipCode,
        latitude,
        longitude,
        onlyAdults,
        showUsers,
        userId: currentUser!.id,
        eventUsers: {
          create: {
            userId: currentUser!.id
          }
        }
      }});

    res.status(201).json(event);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const currentUser = (req as CustomRequest).user;
    const eventId = req.params.id;
    const {
      name,
      description,
      city,
      state,
      country,
      zipCode,
      latitude,
      longitude,
      onlyAdults,
      showUsers,
    } = req.body;

    const eventWithSameEmail = await db.event.findFirst({where: {
      name
    }});

    if (eventWithSameEmail) {
      return res.status(400).json({ error: 'Invalid name'});
    }

    const event = await db.event.update({ where: {
      id: eventId, userId: currentUser?.id },
      data: {
        name,
        description,
        city,
        state,
        country,
        zipCode,
        latitude,
        longitude,
        onlyAdults,
        showUsers
      }
    });

    if (!event) {
      return res.status(400).json({ error: 'Could not update event' });
    }

    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

const remove = async (req: Request, res: Response) => {
  try {
    const currentUser = (req as CustomRequest).user;
    const eventId = req.params.id;

    const event = await db.event.delete({ where: { id: eventId, userId: currentUser?.id } });

    if (!event) {
      return res.status(400).json({ error: 'Could not delete event' });
    }

    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

const listById = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    const event = await db.event.findFirst({ where: { id: eventId } });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

const listAll = async (req: Request, res: Response) => {
  try {
    const events = await db.event.findMany();

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

const listMine = async (req: Request, res: Response) => {
  try {
    const currentUser = (req as CustomRequest).user;
    const events = await db.event.findMany({where: { userId: currentUser?.id }});

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export default { create, update, remove, listAll, listById, listMine };
