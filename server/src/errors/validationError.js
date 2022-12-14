export class ValidationError extends Error {
  constructor(message, info) {
    super(message); //
    this.name = "ValidationError";
    this.info = info;
    this.status = 400;
  }
}
