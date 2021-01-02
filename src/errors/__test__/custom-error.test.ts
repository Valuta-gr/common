import { CustomError } from "../custom-error";

it("creates a proper class from the CustomError abstract class", async () => {
  class FalseError extends CustomError {
    statusCode = 420;

    constructor() {
      super("False Error");

      Object.setPrototypeOf(this, FalseError.prototype);
    }

    serializeErrors() {
      return [
        {
          message: "False Error",
        },
      ];
    }
  }

  const err = await new FalseError();

  expect(err.statusCode).toEqual(420);
  expect(err.message).toEqual("False Error");
});
