export abstract class CustomError extends Error {
  abstract statusCode: number;

  // message is only used internally (on server) for logging
  constructor(message: string) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
