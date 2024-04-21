import { compare, hash } from 'bcryptjs';
import { Request, Response } from 'express';
import { db } from '../db/db';
import { generateAccessToken } from '../services/generateAccessToken';

export async function signin(req: Request, res: Response) {
  try {
    const {name, email, password} = req.body;
    const userWithSameEmail = await db.user.findUnique({where: {
      email: email
    }});

    if (userWithSameEmail) {
      return res.status(400).json({ error: 'Invalid data', details:[{message:'email Is already in use'}]});
    }

    const user = await db.user.create({
      data:{
        name: name,
        email: email,
        password: await hash(password, 12)
      }});

    res.status(201).json({...user, password: null});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function signup(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid data', details:[{message:'invalid credentials'}]});
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid data', details:[{message:'invalid credentials'}]});
    }

    const accessToken = generateAccessToken(user);

    res.status(200).json({accessToken});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
