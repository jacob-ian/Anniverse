import { Celestial } from './celestial';

export abstract class CelestialFactory {
  public abstract create(): Celestial;
}
