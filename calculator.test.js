const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('average 10, 8 and 6 to equal 8', () => {
  expect(calculator.average([10, 8, 6])).toBe(8);
});

test('factorial of 5 to equal 120', () => {
  expect(calculator.factorial(5)).toBe(120);
});

test('factorial of 0 to equal 1', () => {
  expect(calculator.factorial(0)).toBe(1);
});

test('sum of first 5 natural numbers to equal 15', () => {
  expect(calculator.sumNaturalNumbers(5)).toBe(15);
});

test('quadratic formula for x² - 3x + 2 = 0', () => {
  expect(calculator.quadraticFormula(1, -3, 2)).toEqual([2, 1]);
});

test('quadratic formula with one repeated solution', () => {
  expect(calculator.quadraticFormula(1, -4, 4)).toEqual([2, 2]);
});

test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 20 / 4 to equal 5', () => {
  expect(calculator.divide(20, 4)).toBe(5);
});

test('multiply 5 * 2 to equal 10', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test('multiply -3 * 4 to equal -12', () => {
  expect(calculator.multiply(-3, 4)).toBe(-12);
});

test('divide by zero should throw an error', () => {
    expect(() => calculator.divide(10, 0))
        .toThrow('No se puede dividir entre cero');
});

