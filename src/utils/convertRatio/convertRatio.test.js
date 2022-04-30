import { convertRatio } from "./convertRatio";

describe("Testing the valid combinations for the convertRatio() function", () => {
  it("should correctly convert with valid int parameters for Tonnes", () => {
    expect(convertRatio(1000, 32)).toBe(32000);
  });

  it("should correctly convert with valid int parameters for Pounds", () => {
    expect(convertRatio(0.45359237, 45)).toBeCloseTo(20.41, 0.5);
  });

  it("converts correctly with valid int parameters for Grams", () => {
    expect(convertRatio(0.001, 678)).toBe(0.678);
  });

  it("should correctly convert with valid int parameters for Milligrams", () => {
    expect(convertRatio(0.000001, 5600000)).toBe(5.6);
  });

  it("should correctly convert with valid int parameters for Imperial Ton", () => {
    expect(convertRatio(1016.0469088, 25)).toBeCloseTo(25401.2, 0.5);
  });

  it("should correctly convert with valid int parameters for US Ton", () => {
    expect(convertRatio(907.18474, 34)).toBeCloseTo(30844.28116, 0.5);
  });

  it("should correctly convert with valid int parameters for Stone", () => {
    expect(convertRatio(6.35029, 78)).toBeCloseTo(495.323, 0.5);
  });

  it("should correctly convert with valid int parameters for Ounce", () => {
    expect(convertRatio(0.02834952, 96)).toBeCloseTo(2.72155, 0.5);
  });

  it("should correctly convert with valid decimal parameters for Tonnes", () => {
    expect(convertRatio(1000, 32.5)).toBe(32500);
  });

  it("should correctly convert with valid decimal parameters for Pounds", () => {
    expect(convertRatio(0.45359237, 25.6)).toBeCloseTo(11.61, 0.5);
  });

  it("converts correctly with valid decimal parameters for Grams", () => {
    expect(convertRatio(0.001, 4839.5)).toBe(4.8395);
  });

  it("should correctly convert with valid decimal parameters for Milligrams", () => {
    expect(convertRatio(0.000001, 5600000)).toBe(5.6);
  });

  it("should correctly convert with valid decimal parameters for Imperial Ton", () => {
    expect(convertRatio(1016.0469088, 23.68)).toBeCloseTo(24060.06, 0.5);
  });

  it("should correctly convert with valid decimal parameters for US Ton", () => {
    expect(convertRatio(907.18474, 74.23)).toBeCloseTo(67340.32, 0.5);
  });

  it("should correctly convert with valid decimal parameters for Stone", () => {
    expect(convertRatio(6.35029, 88.45)).toBeCloseTo(561.6834, 0.5);
  });

  it("should correctly convert with valid decimal parameters for Ounce", () => {
    expect(convertRatio(0.02834952, 47.665)).toBeCloseTo(1.35, 0.5);
  });

  it("should return a valid result when passed a numerical string ratio and a valid originValue", () => {
    expect(convertRatio("1000", 45)).toBe(45000);
  });
});

describe("Testing all the invalid combinations for the convertRatio() function", () => {
  it("should return NaN when passed no parameters", () => {
    expect(convertRatio()).toBe(NaN);
  });

  it("should return NaN when passed only a ratio", () => {
    expect(convertRatio(1000)).toBe(NaN);
  });

  it("should return NaN when passed a boolean ratio", () => {
    expect(convertRatio(true)).toBe(NaN);
  });

  it("should return NaN when passed a random string ratio", () => {
    expect(convertRatio("hello")).toBe(NaN);
  });

  it("should return NaN when passed a numerical string ratio and no originValue", () => {
    expect(convertRatio("123")).toBe(NaN);
  });
});
