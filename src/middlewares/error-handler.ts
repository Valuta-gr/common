import { Request, Response, NextFunction } from "express";
import { Logger } from "tslog";
import { CustomError } from "../errors/custom-error";

const log = new Logger();

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  log.error("Error-Handler - non-custom error: ", err);

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
