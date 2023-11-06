import coinCounter from "../src/js/CoinCounter";

describe('coinCounter', () => {
  test('should verify data type', () => {
    const Q = 0.25
    expect(typeof Q).toBe('number');
  })

});