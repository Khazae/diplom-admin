import { HttpStatus } from "../constants/HttpStatus";

export class HttpError extends Error {
  public readonly status: HttpStatus | null;

  constructor({
    status,
    message,
  }: {
    status: HttpStatus | null;
    message: string;
  }) {
    super(message);
    this.status = status;
  }
}
