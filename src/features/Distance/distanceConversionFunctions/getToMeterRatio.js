/**
 * Gets the value to multiply by to convert from the input unit to meters
 * @param {number} unit The unit you wish to convert to meters
 * @returns The multiplier ratio to convert from the input unit to meters
 */
export const getToMeterRatio = (unit) => {
  let ratio = NaN;
  try {
    // eslint-disable-next-line no-throw-literal
    if (unit === undefined) throw "missing parameters";

    switch (unit) {
      case "Kilometers":
        ratio = 1000;
        break;
      case "Centimeters":
        ratio = 0.01;
        break;
      case "Millimeters":
        ratio = 0.001;
        break;
      case "Miles":
        ratio = 1609.344;
        break;
      case "Yards":
        ratio = 0.9144;
        break;
      case "Feet":
        ratio = 0.3048;
        break;
      case "Nautical Miles":
        ratio = 1852;
        break;
      default:
        ratio = 1;
        break;
    }
  } catch (error) {}
  return ratio;
};
