import { Exception } from '../exception';
import { Celestial, Position } from './celestial';
import { StarFactory } from './star-factory';

export interface Message {
  getMessage(): string;
  setMessage(message: string): void;
}

export class AnniversaryMessage extends Celestial implements Message {
  private message: string;
  private context: CanvasRenderingContext2D;
  private starRadius: number = 3;

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

  public getUppercaseMessage(): string {
    try {
      let message = this.getMessage();
      return message.toUpperCase();
    } catch (error) {
      throw error;
    }
  }

  public setMessage(message: string): void {
    this.message = message;
  }

  public draw(position: Position, context: CanvasRenderingContext2D): void {
    this.context = context;

    let message = this.getUppercaseMessage();
    let textImageBuffer = this.convertTextToImageBuffer(message);
    this.drawStarsFromBuffer(textImageBuffer);
  }

  private convertTextToImageBuffer(text: string): Uint32Array {
    let canvas = this.createTextCanvas();
    let context = this.printTextOnCanvas(text, canvas);
    let imageBuffer = this.createImageBuffer(context);
    let textUint32Buffer = this.createUint32ArrayFromBuffer(imageBuffer);
    return textUint32Buffer;
  }

  private createTextCanvas(): HTMLCanvasElement {
    let canvas = document.createElement('canvas');
    canvas.width = this.context.canvas.width;
    canvas.height = this.context.canvas.height;
    canvas.style.fontSize = '16px';
    canvas.style.fontFamily = 'monospace';
    canvas.style.letterSpacing = '200%';
    return canvas;
  }

  private printTextOnCanvas(
    text: string,
    canvas: HTMLCanvasElement
  ): CanvasRenderingContext2D {
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const linesOfText = text.split(' ');
    const longestLine = this.getLongestCharCount(linesOfText);

    let yPosition = 18;
    linesOfText.forEach((line) => {
      let xPosition = 10;
      if (line.length < longestLine) {
        const difference = longestLine - line.length;
        xPosition = 10 + (10 / 3) * difference;
      }
      context.fillText(line, xPosition, yPosition);
      yPosition += 10;
    });

    return context;
  }

  private getLongestCharCount(lines: string[]): number {
    let longest = 0;
    lines.forEach((line) => {
      if (line.length > longest) {
        longest = line.length;
      }
    });
    return longest;
  }

  private createImageBuffer(
    context: CanvasRenderingContext2D
  ): ArrayBufferLike {
    const width = context.canvas.width;
    const height = context.canvas.height;
    return context.getImageData(0, 0, width, height).data.buffer;
  }

  private createUint32ArrayFromBuffer(buffer: ArrayBufferLike): Uint32Array {
    return new Uint32Array(buffer);
  }

  private drawStarsFromBuffer(buffer: Uint32Array): void {
    const canvas = this.context.canvas;
    const width = canvas.width;

    for (let pixel = 0; pixel < buffer.length; pixel++) {
      if (this.pixelExists(buffer, pixel)) {
        const position = this.calculateStarPosition(pixel, width);
        this.drawStar(position);
      }
    }
  }

  private pixelExists(buffer: Uint32Array, pixel: number): number {
    return buffer[pixel] & 0xff000000;
  }

  private calculateStarPosition(pixel: number, width: number): Position {
    const x = (pixel % width) * this.starRadius * 5 + this.starRadius;
    const y = ((pixel / width) | 0) * this.starRadius * 5 + this.starRadius;
    return { x, y };
  }

  private drawStar(position: Position): void {
    const starFactory = new StarFactory();
    const star = starFactory.createWithRadius(this.starRadius);
    star.draw(position, this.context);
  }
}
