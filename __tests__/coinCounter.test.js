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

  test('should generate how many times Q divides into userInput as a whole number', () => {
    const userInput = 4.99
    const Q = 0.25
    expect(userInput).toEqual(19);
  })
    

});