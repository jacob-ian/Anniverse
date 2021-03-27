export class Exception {
  private message: string;
  private error: string;

  constructor(error: string, message: string) {
    this.error = error;
    this.message = message;
  }

  public getMessage(): string {
    return `${this.error}: ${this.message}`;
  }
}
