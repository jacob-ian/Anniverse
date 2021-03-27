export interface Position {
  x: number;
  y: number;
}

export abstract class Celestial {
  constructor() {}

  public abstract draw(
    position: Position,
    context: CanvasRenderingContext2D
  ): void;

  public abstract getExpiry(): number;
}
