import { calculate } from '../src/price';

describe('calculate prices', function () {
  it('should calculate the cost of an apple', () => {
    expect(calculate('A99', 1)).toBe(50);
  });
  it('should calculate the cost of 2 apples', () => {
    expect(calculate('A99', 2)).toBe(100);
  });
  it('should calculate the cost of 3 apples', () => {
    expect(calculate('A99', 3)).toBe(130);
  });
  it('should calculate the cost of 6 apples', () => {
    expect(calculate('A99', 6)).toBe(260);
  });
  it('should calculate the cost of 4 apples', () => {
    expect(calculate('A99', 4)).toBe(180);
  });
});
