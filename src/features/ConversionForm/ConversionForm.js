import { Autocomplete, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const ConversionFormHeader = (props) => (
  <Typography variant="h3" variantMapping="h2">
    {props.conversionType}
  </Typography>
);

const Form = (props) => {
  const conversionFormat = props.conversionFormat; //will be needed later
  const optionsList = props.optionsList;
  const convertFn = props.convertFn;

  const convertFrom = props.defaultStartUnit;
  const convertTo = props.defaultEndUnit;

  const valueToConvert = 0;
  const [result, appendResult] = useState();

  const formik = useFormik({
    initialValues: {
      convertFrom: convertFrom,
      convertTo: convertTo,

      valueToConvert: valueToConvert,
      result: result,
    },

    onSubmit: (values) => {
      const conversionResult = convertFn(
        values.convertFrom,
        values.convertTo,
        values.valueToConvert
      );
      appendResult(conversionResult);
    },
  });

  return (
    <form className="ConversionForm" onSubmit={formik.handleSubmit}>
      <div className="ConversionForm-Half">
        <Autocomplete
          disablePortal
          id="ConversionForm-From"
          fullWidth
          className="ConversionForm-FormElement"
          options={optionsList}
          onChange={(e, value) => formik.setFieldValue("convertFrom", value)}
          value={formik.values.convertFrom}
          renderInput={(params) => (
            <TextField {...params} label="Convert From" />
          )}
        />
        <TextField
          fullWidth
          id="ConversionForm-From"
          name="valueToConvert"
          className="ConversionForm-FormElement"
          placeholder="Please enter a value"
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
          fullWidth
          className="ConversionForm-FormElement"
          options={optionsList}
          onChange={(e, value) => formik.setFieldValue("convertTo", value)}
          value={formik.values.convertTo}
          renderInput={(params) => <TextField {...params} label="Convert To" />}
        />

        <TextField
          disabled
          id="outlined-disabled"
          fullWidth
          className="ConversionForm-FormElement"
          placeholder="Result"
          type="number"
          step={0.1}
          value={result}
        />
      </div>
      <Button className="SubmitForm" variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
};

export const ConversionForm = (props) => {
  return (
    <>
      <ConversionFormHeader conversionType={props.conversionFormat} />
      <Form
        conversionFormat={props.conversionFormat}
        defaultStartUnit={props.defaultStartUnit}
        defaultEndUnit={props.defaultEndUnit}
        optionsList={props.optionsList}
        convertFn={props.convertFn}
      />
    </>
  );
};
