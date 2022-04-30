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
