import { Celestial } from './celestial';
import { CelestialFactory } from './celestial-factory';
import { Star } from './star';

export class StarFactory extends CelestialFactory {
  constructor() {
    super();
  }

  public create(): Celestial {
    return new Star();
  }

  public createWithRadius(radius: number) {
    return new Star(radius);
  }
}
