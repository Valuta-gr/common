import { NotAuthorizedError } from "../not-authorized-error";

it("responds with a Not Authorized Error", async () => {
  const err = await new NotAuthorizedError();

  expect(err.statusCode).toEqual(401);
  expect(err.message).toEqual("Not Authorized");
});
