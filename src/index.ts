/* Index file */

/* Utils */
export * from "./utils/env-is-provided";

/* Errors */
export * from "./errors/custom-error";
export * from "./errors/not-found-error";
export * from "./errors/bad-request-error";
export * from "./errors/not-authorized-error";
export * from "./errors/request-validation-error";

/* Middlewares */
export * from "./middlewares/error-handler";
export * from "./middlewares/validate-request";

export const version = () =>
  process.env.npm_package_version! ||
  "Cannot get current version at the moment, refer to package.json";
