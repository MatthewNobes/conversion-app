import { convertRatio } from "../../utils/convertRatio/convertRatio";

export const convertMass = (inputUnit, outputUnit, valueToConvert) => {
  if (
    inputUnit === undefined ||
    outputUnit === undefined ||
    valueToConvert === undefined
  ) {
    return NaN;
  }
  if (inputUnit === outputUnit) {
    return valueToConvert;
  } else {
    const kgValue = getKgValue(inputUnit, valueToConvert);
    const outputValue = getEndValue(outputUnit, kgValue);
    return outputValue;
  }
};

/**
 * Gets the value to multiply by to convert from a kilo into another unit
 * @param {number} unit The unit you wish to convert to from kg
 * @returns The multiplier ratio to convert by to convert from kg to the input unit
 */
export const getFromKiloRatio = (unit) => {
  let ratio = NaN;
  try {
    // eslint-disable-next-line no-throw-literal
    if (unit === undefined) throw "missing parameters";

    switch (unit) {
      case "Tonnes":
        ratio = 0.001;
        break;
      case "Pounds":
        ratio = 2.2046;
        break;
      case "Grams":
        ratio = 1000;
        break;
      case "Milligrams":
        ratio = 1000000;
        break;
      case "Imperial Ton":
        ratio = 0.0009842;
        break;
      case "US Ton":
        ratio = 0.001102312;
        break;
      case "Stone":
        ratio = 0.157473;
        break;
      case "Ounce":
        ratio = 35.2739;
        break;
      default:
        ratio = 1;
        break;
    }
  } catch (error) {}
  return ratio;
};

/**
 * Gets the value to multiply by to convert from the input unit to kg
 * @param {number} unit The unit you wish to convert to kg
 * @returns The multiplier ratio to convert from the input unit to kg
 */
const getToKiloRatio = (unit) => {
  let ratio = NaN;
  try {
    // eslint-disable-next-line no-throw-literal
    if (unit === undefined) throw "missing parameters";

    switch (unit) {
      case "Tonnes":
        ratio = 1000;
        break;
      case "Pounds":
        ratio = 0.45359237;
        break;
      case "Grams":
        ratio = 0.001;
        break;
      case "Milligrams":
        ratio = 0.000001;
        break;
      case "Imperial Ton":
        ratio = 1016.0469088;
        break;
      case "US Ton":
        ratio = 907.18474;
        break;
      case "Stone":
        ratio = 6.35029;
        break;
      case "Ounce":
        ratio = 0.02834952;
        break;
      default:
        ratio = 1;
        break;
    }
  } catch (error) {}
  return ratio;
};

export const getKgValue = (startUnit, originValue) => {
  const ratio = getToKiloRatio(startUnit);
  return convertRatio(ratio, originValue);
};

export const getEndValue = (endUnit, kgValue) => {
  const ratio = getFromKiloRatio(endUnit);
  return convertRatio(ratio, kgValue);
};
