import { calculate } from '../src/price';

describe('calculate prices', function () {
  it('should calculate the cost of an apple', () => {
    expect(calculate('A99', 1)).toBe(50);
  });
  it('should calculate the cost of 2 apples', () => {
    expect(calculate('A99', 2)).toBe(100);
  });
});
