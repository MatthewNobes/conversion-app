import { convertDistance } from "./convertDistance";

describe("Testing valid combinations for the convertDistance() function", () => {
  it("should return 1.356 kilometers when converting 1356 from Meters to Kilometers", () => {
    const expectedResult = 1.356;
    expect(convertDistance("Meters", "Kilometers", 1356)).toBe(expectedResult);
  });

  it("should return 5420 centimeters when converting 54.2 from Meters to Centimeters", () => {
    const expectedResult = 5420;
    expect(convertDistance("Meters", "Centimeters", 54.2)).toBe(expectedResult);
  });

  it("should return 3400 Millimeters when converting 3.4 from Meters to Millimeters", () => {
    const expectedResult = 3400;
    expect(convertDistance("Meters", "Millimeters", 3.4)).toBe(expectedResult);
  });

  it("should return 28.45197 miles when converting 45789 from Meters to Miles", () => {
    const expectedResult = 28.45197;
    expect(convertDistance("Meters", "Miles", 45789)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 85.62992 yards when converting 78.3 from Meters to Yards", () => {
    const expectedResult = 85.62992;
    expect(convertDistance("Meters", "Yards", 78.3)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 1826.115 feet when converting 556.6 from Meters to Feet", () => {
    const expectedResult = 1826.115;
    expect(convertDistance("Meters", "Feet", 556.6)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 20.51836 Nautical Miles when converting 38000 from Meters to Nautical Miles", () => {
    const expectedResult = 20.51836;
    expect(convertDistance("Meters", "Nautical Miles", 38000)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 31200 Nautical Miles when converting 31.2 from Kilometers to Meters", () => {
    const expectedResult = 31200;
    expect(convertDistance("Kilometers", "Meters", 31.2)).toBe(expectedResult);
  });

  it("should return 1.12 Meters when converting 112 from Centimeters to Meters", () => {
    const expectedResult = 1.12;
    expect(convertDistance("Centimeters", "Meters", 112)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 26876.045 Meters when converting 16.7 from Miles to Meters", () => {
    const expectedResult = 26876.045;
    expect(convertDistance("Miles", "Meters", 16.7)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 23.68296 Meters when converting 25.9 from Yards to Meters", () => {
    const expectedResult = 23.68296;
    expect(convertDistance("Yards", "Meters", 25.9)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 3.71856 Meters when converting 12.2 from Feet to Meters", () => {
    const expectedResult = 3.71856;
    expect(convertDistance("Feet", "Meters", 12.2)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 27594.8 Meters when converting 14.9 from Nautical Miles to Meters", () => {
    const expectedResult = 27594.8;
    expect(convertDistance("Nautical Miles", "Meters", 14.9)).toBe(
      expectedResult
    );
  });

  it("should return 63360 Feet when converting 12 from Miles to Feet", () => {
    const expectedResult = 63360;
    expect(convertDistance("Miles", "Feet", 12)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("should return 200000 Centimeters when converting 2 from Kilometers to Centimeters", () => {
    const expectedResult = 200000;
    expect(convertDistance("Kilometers", "Centimeters", 2)).toBe(
      expectedResult
    );
  });
});
