import calculate from '../src/price';

describe('calculate prices', function () {
  it('should calculate the cost of an apple', () => {
    expect(calculate('A99')).toBe(50);
  });
});
