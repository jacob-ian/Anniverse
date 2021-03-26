import { Celestial, Position } from './celestial';

export class Star extends Celestial {
  constructor() {
    super();
  }

  public getExpiry(): number {
    return 0;
  }

  public draw(position: Position, context: CanvasRenderingContext2D): void {
    let image = this.createImageElement();
    context.drawImage(image, position.x, position.y);
  }

  private createImageElement(): HTMLImageElement {
    let image = document.createElement('img');
    image.src = 'assets/svg/star.svg';
    image.width = 5;
    image.height = 5;

    return image;
  }
}
