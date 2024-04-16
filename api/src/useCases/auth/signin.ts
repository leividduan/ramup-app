import { Request, Response } from 'express';
import { db } from '../../db/db';

export async function signin(req: Request, res: Response) {
  try {
    const user = await db.user.create({
      data:{
        name: 'teste',
        email: 'teste@teste3.com',
        password: 'teste',
        updated_at: new Date()
      }});

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
