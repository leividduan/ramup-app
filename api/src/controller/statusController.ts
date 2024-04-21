import { Request, Response } from 'express';

export async function status(req: Request, res: Response) {
  res.sendStatus(200);
}
