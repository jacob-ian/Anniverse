import { Exception } from '../exception';
import { Celestial, Position } from './celestial';

export interface Message {
  getMessage(): string;
  setMessage(message: string): void;
}

export class AnniversaryMessage extends Celestial implements Message {
  private message: string;

  constructor();
  constructor(message: string);
  constructor(message?: string) {
    super();
    if (message) {
      this.message = message;
    }
  }

  public getExpiry(): number {
    const date = new Date(Date.now());
    const year = date.getFullYear();
    const expiryTime = new Date(`30-Mar-${year}`).getTime();
    return expiryTime;
  }

  public getMessage(): string {
    if (!this.message) {
      throw new Exception('invalid-input', 'The message is not defined.');
    }
    return this.message;
  }

  public setMessage(message: string): void {
    this.message = message;
  }

  public draw(position: Position, context: CanvasRenderingContext2D): void {
    throw new Error('Method not implemented.');
  }
}
