import { Autocomplete, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const ConversionFormHeader = (props) => (
  <Typography variant="h3" variantMapping="h2">
    {props.conversionType}
  </Typography>
);

export const ConversionForm = (props) => {
  const conversionFormat = props.conversionFormat; //'Mass
  const defaultStartUnit = props.defaultStartUnit; //'Kilograms'
  const defaultEndUnit = props.defaultEndUnit; //'Pounds'
  const optionsList = props.optionsList; //'["Kilograms", "Pounds", "Tonnes"]'
  const convertFn = props.convertFn; //convertMass

  const [convertFrom, appendConvertFrom] = useState(defaultStartUnit);
  const [convertTo, appendConvertTo] = useState(defaultEndUnit);

  const [valueToConvert, appendValueToConvert] = useState(6.5);
  const [result, appendResult] = useState(0);

  const convert = (values) => {
    const result = convertFn(
      values.convertFrom,
      values.convertTo,
      values.valueToConvert
    );
    return result;
  };

  const formik = useFormik({
    initialValues: {
      convertFrom: "",
      convertTo: "",

      valueToConvert: 0,
      result: 0,
    },

    onSubmit: (values) => {
      debugger;
      convert(values);
      console.log(values.result);
    },
  });

  return (
    <form className="ConversionForm">
      <ConversionFormHeader conversionType={conversionFormat} />
      <div className="ConversionForm-Half">
        <Autocomplete
          disablePortal
          id="ConversionForm-From"
          className="ConversionForm-FormElement"
          options={optionsList}
          onChange={(e, value) => formik.setFieldValue("convertFrom", value)}
          value={formik.values.convertFrom}
          renderInput={(params) => (
            <TextField {...params} label="Convert From" />
          )}
        />
        <TextField
          id="ConversionForm-From"
          className="ConversionForm-FormElement"
          label="Value"
          variant="outlined"
          type="number"
          step={0.1}
          onChange={formik.handleChange}
          value={formik.values.valueToConvert}
        />
      </div>

      <div className="ConversionForm-Half">
        <Autocomplete
          disablePortal
          id="ConversionForm-To"
          className="ConversionForm-FormElement"
          options={optionsList}
          onChange={(e, value) => formik.setFieldValue("convertTo", value)}
          value={formik.values.convertTo}
          renderInput={(params) => <TextField {...params} label="Convert To" />}
        />
        <TextField
          disabled
          id="ConversionForm-To"
          className="ConversionForm-FormElement"
          label="Result"
          variant="outlined"
          type="number"
          step={0.1}
          onChange={formik.handleChange}
          value={formik.values.result}
        />
      </div>
      <Button className="SubmitForm" variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
};
