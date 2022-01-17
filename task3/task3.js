class Calculator {
  constructor() {}

  add(x, y) {
    return x + y;
  }

  substract(x, y) {
    return x - y;
  }

  divide(x, y) {
    return x / y;
  }

  multiply(x, y) {
    return x * y;
  }
}

let calculator = new Calculator();
module.exports = calculator;
