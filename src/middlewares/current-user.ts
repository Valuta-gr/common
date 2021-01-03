import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (typeof req.headers.authorization === "undefined") {
    throw new NotAuthorizedError();
  }

  try {
    const payload = (await jwt.verify(
      req.headers.authorization,
      process.env.JWT_KEY!
    )) as UserPayload;
    req.currentUser = payload;
  } catch (error) {}

  next();
};
