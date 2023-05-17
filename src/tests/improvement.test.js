import function1 from "../improvement-1";
import function2 from "../improvement-2";
import function3 from "../improvement-3";

const items = [
  { name: "Carrot", type: "Food" },
  { name: "Mercedes", type: "Car" },
  { name: "Tomato", type: "Food" },
  { name: "Corn", type: "Food" },
  { name: "BMW", type: "Car" },
];

const values = [2, 45, 6, 78, 25];

describe("IMPROVEMENT", () => {
  test("function 1 should still work", () => {
    expect(function1("abcdefRRR1234")).toBe(3);
    expect(function1("abcdefrRR1234")).toBe(2);
  });

  test("function 2 should still work", () => {
    expect(function2(items).length).toBe(3);
    expect(function2(items)).toStrictEqual([
      { name: "Carrot", type: "Food" },
      { name: "Tomato", type: "Food" },
      { name: "Corn", type: "Food" },
    ]);
  });

  test("function 3 should still work", () => {
    expect(function3(values)).toBe(78);
  });
});
