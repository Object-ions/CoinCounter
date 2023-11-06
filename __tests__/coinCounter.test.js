import coinCounter from "../src/js/CoinCounter";

describe('coinCounter', () => {
  test('should verify data type', () => {
    const Q = 0.25
    expect(typeof Q).toBe('number');
  })

  test('should return Q value', () => {
    const Q = 0.25
    expect(Q).toEqual(0.25);
  })

});