import { Celestial, Position } from './celestial';

export class Star extends Celestial {
  private randomiseSize: boolean = true;
  private radius: number = 10;
  private inset: number = 2;
  private starSpikes: number = 5;
  private context: CanvasRenderingContext2D;
  private position: Position;

  constructor();
  constructor(randomiseSize: boolean);
  constructor(randomise?: boolean) {
    super();

    if (randomise) {
      this.randomiseSize = randomise;
    }
  }

  public getExpiry(): number {
    return 0;
  }

  public draw(position: Position, context: CanvasRenderingContext2D): void {
    this.context = context;
    this.position = position;
    this.selectRadiusAndInset();
    this.drawStar();
  }

  private selectRadiusAndInset(): void {
    if (this.randomiseSize) {
      this.radius = this.generateRadius();
    }

    this.inset = this.radius / 2;
  }

  private generateRadius(): number {
    return this.generateRandomInRange(3, 8);
  }

  private generateRandomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private drawStar(): void {
    this.context.save();
    this.context.beginPath();
    this.drawSpikes();
    this.context.closePath();
    this.paint();
    this.context.restore();
  }

  private drawSpikes(): void {
    this.moveToStartPosition();
    for (let spike = 0; spike < this.starSpikes; spike++) {
      this.drawSpike();
    }
  }

  private moveToStartPosition(): void {
    this.context.translate(this.position.x, this.position.y);
    this.context.moveTo(0, 0 - this.radius);
  }

  private drawSpike(): void {
    this.context.rotate(Math.PI / this.starSpikes);
    this.context.lineTo(0, 0 - (this.radius - this.inset));
    this.context.rotate(Math.PI / this.starSpikes);
    this.context.lineTo(0, 0 - this.radius);
  }

  private paint(): void {
    this.context.fillStyle = 'rgba(255,253,233)';
    this.context.strokeStyle = 'rgba(255,253,244)';
    this.context.lineWidth = 1;
    this.context.stroke();
    this.context.fill();
  }
}
