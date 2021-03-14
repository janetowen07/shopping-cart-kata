import add from '../src/price';

describe('adder tests', function () {
  it('should return addition of two numbers', () => {
    expect(add(1,1)).toBe(2);
  });
});
