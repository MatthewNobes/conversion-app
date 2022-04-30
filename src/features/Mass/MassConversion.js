import "../../App.css";
import React from "react";
import { convertMass } from "./massConversionFunctions/convertMass";
import ConversionForm from "../ConversionForm";
import massOptions from "./massOptions.json";

export const MassConversion = () => {
  return (
    <>
      <ConversionForm
        conversionFormat={"Mass"}
        defaultStartUnit={"Kilograms"}
        defaultEndUnit={"Pounds"}
        optionsList={massOptions}
        convertFn={convertMass}
      />
    </>
  );
};
