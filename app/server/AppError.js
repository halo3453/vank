export default class AppError extends Error {
  constructor({
    status,
    errorCode,
    message,
    details,
  } = {}) {
    super(message);

    this.message = message;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);
  }
}
