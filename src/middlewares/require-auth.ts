import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (typeof req.headers.authorization !== "undefined") {
    let token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_KEY!, (err, decoded) => {
      if (err) throw new NotAuthorizedError();

      console.log(decoded);

      return next();
    });
  } else {
    throw new NotAuthorizedError();
  }
};
