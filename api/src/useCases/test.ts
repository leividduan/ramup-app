import { Request, Response } from 'express';

export async function test(req: Request, res: Response) {
  try {

    res.status(200).json({result: true});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
