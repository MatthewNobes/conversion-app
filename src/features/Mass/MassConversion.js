import "../../App.css";
import React from "react";
import { convertMass } from "./MassFunctions";
import ConversionForm from "../ConversionForm";

const massOptions = [
  "Kilograms",
  "Pounds",
  "Tonnes",
  "Grams",
  "Milligrams",
  "Imperial Ton",
  "US Ton",
  "Stone",
  "Ounce",
];

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
