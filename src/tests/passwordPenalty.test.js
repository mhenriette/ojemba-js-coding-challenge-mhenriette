import penaltyPoints from "../passwordPenalty";

describe("PASSWORD_PENALTY", () => {
  test(`Calculate penalty points`, () => {
    expect(penaltyPoints("amGGAg8m0Q")).toBe(1);
    expect(penaltyPoints("U2jSS277pQ")).toBe(2);
    expect(penaltyPoints("70vSSS859Q")).toBe(2);
    expect(penaltyPoints("7UvSSSS89Q")).toBe(2);
  });

  test("Returns zero if no penalty points or no input", () => {
    expect(penaltyPoints("amdGAg8m0Q")).toBe(0);
    expect(penaltyPoints(null)).toBe(0);
    expect(penaltyPoints("")).toBe(0);
    expect(penaltyPoints()).toBe(0);
  });
});
