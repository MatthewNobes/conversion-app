export const convertRatio = (ratio, valueToConvert) => {
  try {
    const convertedValue = valueToConvert * ratio;
    return convertedValue;
  } catch (error) {
    return NaN;
  }
};
