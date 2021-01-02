import { RequestValidationError } from "../request-validation-error";

it("responds with an empty Request Validation Error", async () => {
  const err = await new RequestValidationError([]);

  expect(err.statusCode).toEqual(400);
  expect(err.message).toEqual("Invalid request parameters");
});
