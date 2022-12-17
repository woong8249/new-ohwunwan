export class ValidationError extends Error {
  constructor(message, info, status) {
    super(message); //
    this.name = "ValidationError";
    this.info = info;
    this.status = status;
  }
}
