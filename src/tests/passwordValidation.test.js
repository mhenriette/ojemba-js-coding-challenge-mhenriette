import isValidPassword, { forbiddenPasswords } from "../passwordValidation";

describe("VALIDATION_BASIC", () => {
  test("happy case", () => {
    expect(isValidPassword("K71Hnw84aE")).toBe(true);
  });

  test(`a password that is too long/short is invalid`, () => {
    expect(isValidPassword("1244352354235235423455Aa")).toBe(false);
    expect(isValidPassword("J8hWf1A")).toBe(false);
  });

  test(`a password that only has numbers is invalid`, () => {
    expect(isValidPassword("1964827351")).toBe(false);
  });

  test(`a password that only has characters is invalid`, () => {
    expect(isValidPassword("kamrhGDhAU")).toBe(false);
  });

  test(`a password with special characters is invalid`, () => {
    expect(isValidPassword("1/ab3@K#MD")).toBe(false);
  });

  test(`a password with only lower/upper case characters is invalid`, () => {
    expect(isValidPassword("aj4hw29r73")).toBe(false);
    expect(isValidPassword("KME63J02JT")).toBe(false);
  });

  test.each(forbiddenPasswords)(
    `a forbidden password is invalid`,
    (forbiddenPassword) => {
      expect(isValidPassword(forbiddenPassword)).toBe(false);
    }
  );
});

describe("VALIDATION_SEQUENCES", () => {
  test(`a password with a directly ascending/descending sequence of numbers is invalid`, () => {
    expect(isValidPassword("a11345678H")).toBe(false);
    expect(isValidPassword("a88654321H")).toBe(false);
    expect(isValidPassword("A1f3gH7654")).toBe(false);
  });
});

describe("VALIDATION_VARIANCE", () => {
  test(`a password that has less that 4 different digits/characters is invalid`, () => {
    expect(isValidPassword("aaBBcc1111")).toBe(true);
    expect(isValidPassword("aB14aB14aB")).toBe(true);
    expect(isValidPassword("BBBBcc1111")).toBe(false);
    expect(isValidPassword("aB1aB1aB1a")).toBe(false);
    expect(isValidPassword("aaaaBBBB11")).toBe(false);
  });
});
