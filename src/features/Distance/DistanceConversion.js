import "../../App.css";
import React from "react";
import ConversionForm from "../ConversionForm";
import distanceOptions from "./distanceOptions.json";

export const DistanceConversion = () => {
  return (
    <>
      <ConversionForm
        conversionFormat={"Distance"}
        defaultStartUnit={"Meters"}
        defaultEndUnit={"Kilometers"}
        optionsList={distanceOptions}
      />
    </>
  );
};
