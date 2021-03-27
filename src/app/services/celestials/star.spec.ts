import { Star } from './star';

describe('Star', () => {
  let star: Star;

  it('should create an instance', () => {
    expect(new Star()).toBeTruthy();
  });

  describe('Test getExpiry()', () => {
    beforeEach(() => {
      star = new Star();
    });
    it('Should return 0', () => {
      let expiry = star.getExpiry();
      expect(expiry).toBe(0);
    });
  });

  describe('Test draw', () => {
    describe('Test with random radius', () => {
      let contextMethods = [
        'stroke',
        'fill',
        'beginPath',
        'save',
        'translate',
        'moveTo',
        'rotate',
        'lineTo',
        'closePath',
        'restore',
      ];

      let contextSpy = jasmine.createSpyObj('context', contextMethods);

      let position = { x: 0, y: 0 };
      beforeEach(() => {
        star = new Star();
      });

      it('Should call the fill method', () => {
        star.draw(position, contextSpy);
        expect(contextSpy.stroke).toHaveBeenCalled();
      });

      it('Should call the stroke method', () => {
        star.draw(position, contextSpy);
        expect(contextSpy.fill).toHaveBeenCalled();
      });

      it('Should call the beginPath method', () => {
        star.draw(position, contextSpy);
        expect(contextSpy.beginPath).toHaveBeenCalled();
      });
    });

    describe('Test with set radius', () => {});
  });
});
