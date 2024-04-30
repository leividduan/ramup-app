import { Request, Response } from 'express';

const status = async (req: Request, res: Response) => {
  res.sendStatus(200);
}

export default { status };
