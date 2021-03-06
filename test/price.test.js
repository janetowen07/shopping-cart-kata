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
  it('should calculate the cost of 7 apples', () => {
    expect(calculate('A99', 7)).toBe(310);
  })
  it('should calculate the cost of 1 banana', () => {
    expect(calculate('B15', 1)).toBe(30);
  })
  it('should calculate the cost of 2 bananas', () => {
    expect(calculate('B15', 2)).toBe(45);
  })
  it('should calculate the cost of 3 bananas', () => {
    expect(calculate('B15', 3)).toBe(75);
  })
  it('should calculate the cost of 1 carrot', () => {
    expect(calculate('C40', 1)).toBe(60);
  })
  it('should calculate the cost of an empty basket', () => {
    expect(calculate('', 0)).toBe(0);
  })
  it('should calculate the cost of an empty basket', () => {
    expect(calculate(null, 0)).toBe(0);
  })
  it('should calculate the cost of an empty basket', () => {
    expect(calculate(undefined, 0)).toBe(0);
  })
  it('should calculate the cost if no quantity given', () => {
    expect(calculate('A99', '')).toBe(0);
  });
  it('should calculate the cost if no quantity given', () => {
    expect(calculate('A99', null)).toBe(0);
  });
  it('should calculate the cost if no quantity given', () => {
    expect(calculate('A99', undefined)).toBe(0);
  });
});
