/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';

export interface CustomRequest extends Request {
  user: User | undefined;
}

export function validateJwt(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    (req as CustomRequest).user = user;

    if (err){
      console.log(err);
      return res.sendStatus(403);
    }

    next();
  });
}
