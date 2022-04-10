//import css from './MassConversion.module.css';
import "../../App.css";
import React from "react";
import { convertMass } from "./MassFunctions";
import ConversionForm from "../../features/ConversionForm";

const massOptions = ["Kilograms", "Pounds", "Tonnes"];

export const MassConversion = () => {
  return (
    <>
      <ConversionForm
        conversionFormat={"Mass"}
        defaultStartUnit={"Kilograms"}
        defaultEndUnit={"Pounds"}
        optionsList={massOptions}
        convertFn={convertMass()}
      />
    </>
  );
};
