import { NotFoundError } from "../not-found-error";

it("responds with a Not Found Error", async () => {
  const err = await new NotFoundError();

  expect(err.statusCode).toEqual(404);
  expect(err.message).toEqual("Route not found");
});
