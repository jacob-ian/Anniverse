import { Exception } from './exception';

describe('Exception', () => {
  let exception = new Exception('invalid-input', 'Test error');

  it('should create an instance', () => {
    expect(exception).toBeTruthy();
  });

  it('Should return the message', () => {
    expect(exception.getMessage()).toBe('invalid-input: Test error');
  });
});
