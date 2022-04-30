import { convertRatio } from "../../../utils/convertRatio/convertRatio";
import { getToKiloRatio } from "./getToKiloRatio";
import { getFromKiloRatio } from "./getFromKiloRatio";

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

export const getKgValue = (startUnit, originValue) => {
  const ratio = getToKiloRatio(startUnit);
  return convertRatio(ratio, originValue);
};

export const getEndValue = (endUnit, kgValue) => {
  const ratio = getFromKiloRatio(endUnit);
  return convertRatio(ratio, kgValue);
};
