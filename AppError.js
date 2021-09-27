export default class AppError extends Error {
  constructor({
    status,
    errorCode,
    message,
    details,
  } = {}) {
    super(message);

    this.name = this.constructor.errorCode || this.constructor.name;
    this.status = status || 400;
    this.details = details;
    this.errorCode = errorCode || 'AppError';
    this.message = message;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);
  }
}
