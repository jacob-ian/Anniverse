import { Star } from './star';
import { StarFactory } from './star-factory';

describe('StarFactory', () => {
  let starFactory = new StarFactory();

  it('should create an instance', () => {
    expect(starFactory).toBeTruthy();
  });

  it('Should create a Star with random radius', () => {
    expect(starFactory.create()).toBeInstanceOf(Star);
  });

  it('Should create a Star with a defined radius', () => {
    expect(starFactory.createWithRadius(4)).toBeInstanceOf(Star);
  });
});
