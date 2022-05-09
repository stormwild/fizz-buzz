import { isMultipleOfFive, isMultipleOfThree } from "../src/fizz-buzz";

describe("fizz-buzz", () => {
  it("returns true for a multiple of 3", () => {
    expect(isMultipleOfThree(3)).toBe(true);
  });

  it("returns false for not a multiple of 3", () => {
    expect(isMultipleOfThree(5)).toBe(false);
  });

  it("returns true for a multiple of 5", () => {
    expect(isMultipleOfFive(5)).toBe(true);
  });

  it("returns false for not a multiple of 5", () => {
    expect(isMultipleOfFive(3)).toBe(false);
  });
});
