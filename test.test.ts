import { expect, it, describe } from "bun:test";

describe("Add", () => {
  it("2 + 2", () => {
    const actual = 2 + 2;
    const expected = 4;

    expect(actual).toBe(expected);
  });
});
