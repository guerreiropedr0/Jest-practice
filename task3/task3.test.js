const calculator = require('./task3.js');

describe('add', () => {
  test('2 + 2 = 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('-5 + -4 = -9', () => {
    expect(calculator.add(-5, -4)).toBe(-9);
  });

  test('7340 + 13013 = 20353', () => {
    expect(calculator.add(7340, 13013)).toBe(20353);
  });
});

describe('substract', () => {
  test('33 - 2 = 31', () => {
    expect(calculator.substract(33, 2)).toBe(31);
  });

  test('-5 - -4 = -1', () => {
    expect(calculator.substract(-5, -4)).toBe(-1);
  });

  test('23000 - 13013 = 9987', () => {
    expect(calculator.substract(23000, 13013)).toBe(9987);
  });
});

describe('divide', () => {
  test('40 / 2 = 20', () => {
    expect(calculator.divide(40, 2)).toBe(20);
  });

  test('70 / 7 = 10', () => {
    expect(calculator.divide(70, 7)).toBe(10);
  });

  test('19998 / 9 = 2222', () => {
    expect(calculator.divide(19998, 9)).toBe(2222);
  });
});

describe('multiply', () => {
  test('40 * 2 = 80', () => {
    expect(calculator.multiply(40, 2)).toBe(80);
  });

  test('70 * 7 = 490', () => {
    expect(calculator.multiply(70, 7)).toBe(490);
  });

  test('19998 * 9 = 179982', () => {
    expect(calculator.multiply(19998, 9)).toBe(179982);
  });
});
