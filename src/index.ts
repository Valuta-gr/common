/* Index file */

/* Utils */
export * from "./utils/env-is-provided";

/* Errors */
export * from "./errors/custom-error"; // Abstract class used to create the errors below
export * from "./errors/not-found-error"; // Not Found Error
export * from "./errors/bad-request-error"; // Bad Request Error
export * from "./errors/not-authorized-error"; // Not Authorized Error
export * from "./errors/request-validation-error"; // Request Validation Error

/* Middlewares */
export * from "./middlewares/current-user"; // Get info about current user
export * from "./middlewares/require-auth"; // Authentication for protected routes
export * from "./middlewares/error-handler"; // Error Handler
export * from "./middlewares/validate-request"; // JSON Validator

/* Get downloaded package version */
export const version = () =>
  process.env.npm_package_version! ||
  "Cannot get current version at the moment, refer to package.json";
