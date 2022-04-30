/**
 * Gets the value to multiply by to convert from meters into another unit
 * @param {number} unit The unit you wish to convert to from meters
 * @returns The multiplier ratio to convert by to convert from meters to the input unit
 */
export const getFromMeterRatio = (unit) => {
  let ratio = NaN;
  try {
    // eslint-disable-next-line no-throw-literal
    if (unit === undefined) throw "missing parameters";

    switch (unit) {
      case "Kilometers":
        ratio = 0.001;
        break;
      case "Centimeters":
        ratio = 100;
        break;
      case "Millimeters":
        ratio = 1000;
        break;
      case "Miles":
        ratio = 0.00062137;
        break;
      case "Yards":
        ratio = 1.093613;
        break;
      case "Feet":
        ratio = 3.28084;
        break;
      case "Nautical Miles":
        ratio = 0.0005399568;
        break;
      default:
        ratio = 1;
        break;
    }
  } catch (error) {}
  return ratio;
};
