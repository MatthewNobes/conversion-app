import { getToMeterRatio } from "./getToMeterRatio";
import { getFromMeterRatio } from "./getFromMeterRatio";

export const convertDistance = (inputUnit, outputUnit, valueToConvert) => {
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
    const meterValue = getMeterValue(inputUnit, valueToConvert);
    const outputValue = getEndValue(outputUnit, meterValue);
    return outputValue;
  }
};

export const getMeterValue = (startUnit, originValue) => {
  const ratio = getToMeterRatio(startUnit);
  return convert(ratio, originValue);
};

export const getEndValue = (endUnit, kgValue) => {
  const ratio = getFromMeterRatio(endUnit);
  return convert(ratio, kgValue);
};

export const convert = (ratio, valueToConvert) => {
  try {
    const convertedValue = valueToConvert * ratio;
    return convertedValue;
  } catch (error) {
    return NaN;
  }
};
