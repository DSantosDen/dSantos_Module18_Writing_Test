const {
  addition,
  multiplication,
  concatOdds,
} = require("./mainFunctionsForJest");
const { default: expect } = require("expect");

describe("addition-01", () => {
  test("should return a number", () => {
    expect(typeof addition(2, 3)).toEqual(typeof Number());
  });
  test("should return the sum of two numbers", () => {
    expect(addition(2, 3)).toBe(5);
  });
  test("should throw an error when inputs are not numbers", () => {
    expect(() => addition("str", 3)).toThrow("Input is not a number");
    expect(() => addition(3, "str")).toThrow("Input is not a number");
  });
});

describe("multiplication-02", () => {
  test("should return a number", () => {
    expect(typeof multiplication(2, 3)).toEqual(typeof Number());
  });
  test("should return the sum of two numbers", () => {
    expect(multiplication(2, 3)).toBe(6);
  });
  test("should throw an error when inputs are not numbers", () => {
    expect(() => multiplication("str", 3)).toThrow("Input is not a number");
    expect(() => multiplication(3, "str")).toThrow("Input is not a number");
  });
});

describe("concatOdds-03", () => {
  test("Concatenates two arrays", () => {
    expect(concatOdds([7, 8, 9],[4, 5, 6])).toEqual([5, 7, 9]);
  });
});

/* jest documentation
https://jestjs.io/docs/using-matchers
*/
