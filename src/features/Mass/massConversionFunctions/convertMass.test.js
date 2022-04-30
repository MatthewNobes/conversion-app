import { convertMass, getKgValue } from "./convertMass";

describe("Testing the convertMass function", () => {
  it("testing valid conversion from tonnes to kilograms", () => {
    const expectedResult = 17000;
    expect(convertMass("Tonnes", "Kilograms", 17)).toBe(expectedResult);
  });

  it("testing valid decimal conversion from tonnes to kilograms", () => {
    const expectedResult = 14600;
    expect(convertMass("Tonnes", "Kilograms", 14.6)).toBe(expectedResult);
  });

  it("testing valid decimal string conversion from tonnes to kilograms", () => {
    const expectedResult = 14600;
    expect(convertMass("Tonnes", "Kilograms", "14.6")).toBe(expectedResult);
  });

  it("testing valid conversion from pounds to kilograms", () => {
    const expectedResult = 20.4117;
    expect(convertMass("Pounds", "Kilograms", 45)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("testing valid decimal conversion from pounds to kilograms", () => {
    const expectedResult = 5.7470153;
    expect(convertMass("Pounds", "Kilograms", 12.67)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });
  it("testing valid decimal string conversion from pounds to kilograms", () => {
    const expectedResult = 5.7470153;
    expect(convertMass("Pounds", "Kilograms", "12.67")).toBeCloseTo(
      expectedResult,
      0.5
    );
  });
  it("testing valid conversion from pounds to tonnes", () => {
    const expectedResult = 6.1076213;
    expect(convertMass("Pounds", "Tonnes", 13465)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("testing valid decimal conversion from pounds to tonnes", () => {
    const expectedResult = 655.103774082;
    expect(convertMass("Pounds", "Tonnes", 1444256.6)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("testing valid decimal string conversion from pounds to tonnes", () => {
    const expectedResult = 655.103774082;
    expect(convertMass("Pounds", "Tonnes", "1444256.6")).toBeCloseTo(
      expectedResult,
      0.5
    );
  });

  it("testing valid conversion from kilograms to tonnes", () => {
    const expectedResult = 13.465;
    expect(convertMass("Kilograms", "Tonnes", 13465)).toBe(expectedResult);
  });

  it("testing valid decimal conversion from kilograms to tonnes", () => {
    const expectedResult = 1.2234;
    expect(convertMass("Kilograms", "Tonnes", 1223.4)).toBe(expectedResult);
  });
  it("testing valid decimal string conversion from kilograms to tonnes", () => {
    const expectedResult = 1.2234;
    expect(convertMass("Kilograms", "Tonnes", "1223.4")).toBe(expectedResult);
  });
  it("testing valid conversion from kilograms to pounds", () => {
    const expectedResult = 295.419;
    expect(convertMass("Kilograms", "Pounds", 134)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });
  it("testing valid decimal conversion from kilograms to pounds", () => {
    const expectedResult = 100.7513;
    expect(convertMass("Kilograms", "Pounds", 45.7)).toBeCloseTo(
      expectedResult,
      0.5
    );
  });
  it("testing valid decimal string conversion from kilograms to pounds", () => {
    const expectedResult = 100.7513;
    expect(convertMass("Kilograms", "Pounds", "45.7")).toBeCloseTo(
      expectedResult,
      0.5
    );
  });
  it("testing a conversion where no parameters are passed in ", () => {
    expect(convertMass()).toBe(NaN);
  });
  it("testing a conversion where no valueToConvert is passed in ", () => {
    expect(convertMass("Kilograms", "Pounds")).toBe(NaN);
  });
});

describe("Testing the valid combinations for the getKgValue function", () => {
  it("should correctly convert with valid int parameters for Tonnes", () => {
    expect(getKgValue("Tonnes", 32)).toBe(32000);
  });

  it("should correctly convert with valid int parameters for Pounds", () => {
    expect(getKgValue("Pounds", 45)).toBeCloseTo(20.41, 0.5);
  });

  it("converts correctly with valid int parameters for Grams", () => {
    expect(getKgValue("Grams", 678)).toBe(0.678);
  });

  it("should correctly convert with valid int parameters for Milligrams", () => {
    expect(getKgValue("Milligrams", 5600000)).toBe(5.6);
  });

  it("should correctly convert with valid int parameters for Imperial Ton", () => {
    expect(getKgValue("Imperial Ton", 25)).toBeCloseTo(25401.2, 0.5);
  });

  it("should correctly convert with valid int parameters for US Ton", () => {
    expect(getKgValue("US Ton", 34)).toBeCloseTo(30844.28116, 0.5);
  });

  it("should correctly convert with valid int parameters for Stone", () => {
    expect(getKgValue("Stone", 78)).toBeCloseTo(495.323, 0.5);
  });

  it("should correctly convert with valid int parameters for Ounce", () => {
    expect(getKgValue("Ounce", 96)).toBeCloseTo(2.72155, 0.5);
  });

  it("should correctly convert with valid decimal parameters for Tonnes", () => {
    expect(getKgValue("Tonnes", 32.5)).toBe(32500);
  });

  it("should correctly convert with valid decimal parameters for Pounds", () => {
    expect(getKgValue("Pounds", 25.6)).toBeCloseTo(11.61, 0.5);
  });

  it("converts correctly with valid decimal parameters for Grams", () => {
    expect(getKgValue("Grams", 4839.5)).toBe(4.8395);
  });

  it("should correctly convert with valid decimal parameters for Milligrams", () => {
    expect(getKgValue("Milligrams", 5600000)).toBe(5.6);
  });

  it("should correctly convert with valid decimal parameters for Imperial Ton", () => {
    expect(getKgValue("Imperial Ton", 23.68)).toBeCloseTo(24060.06, 0.5);
  });

  it("should correctly convert with valid decimal parameters for US Ton", () => {
    expect(getKgValue("US Ton", 74.23)).toBeCloseTo(67340.32, 0.5);
  });

  it("should correctly convert with valid decimal parameters for Stone", () => {
    expect(getKgValue("Stone", 88.45)).toBeCloseTo(561.6834, 0.5);
  });

  it("should correctly convert with valid decimal parameters for Ounce", () => {
    expect(getKgValue("Ounce", 47.665)).toBeCloseTo(1.35, 0.5);
  });

  it("should return a valid result when passed a numerical string ratio and a valid originValue", () => {
    expect(getKgValue("Tonnes", 45)).toBe(45000);
  });
});

describe("Testing all the invalid combinations for the getKgValue function", () => {
  it("should return NaN when passed no parameters", () => {
    expect(getKgValue()).toBe(NaN);
  });

  it("should return NaN when passed only a startUnit", () => {
    expect(getKgValue(1000)).toBe(NaN);
  });

  it("should return NaN when passed a boolean startUnit", () => {
    expect(getKgValue(true)).toBe(NaN);
  });

  it("should return NaN when passed a random string startUnit", () => {
    expect(getKgValue("hello")).toBe(NaN);
  });

  it("should return NaN when passed a numerical string startUnit and no originValue", () => {
    expect(getKgValue("123")).toBe(NaN);
  });
});
