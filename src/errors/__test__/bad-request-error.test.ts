import { BadRequestError } from "../bad-request-error";

it("responds with a Bad Request Error", async () => {
  const msg = "You did not include any JSON data";
  const err = await new BadRequestError(msg);

  expect(err.statusCode).toEqual(400);
  expect(err.message).toEqual(msg);
});
