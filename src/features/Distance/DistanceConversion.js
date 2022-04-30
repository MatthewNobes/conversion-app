import "../../App.css";
import React from "react";
import ConversionForm from "../ConversionForm";

const distanceOptions = ["Meters", "Kilometers", "Centimeters"];

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
