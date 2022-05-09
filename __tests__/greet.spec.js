import greet from "../src/greet";

test("returns Hello name", () => {
  expect(greet("Jane")).toBe("Hello Jane");
});
