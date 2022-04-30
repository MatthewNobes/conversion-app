/**
 * Gets the value to multiply by to convert from the input unit to kg
 * @param {number} unit The unit you wish to convert to kg
 * @returns The multiplier ratio to convert from the input unit to kg
 */
export const getToKiloRatio = (unit) => {
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
