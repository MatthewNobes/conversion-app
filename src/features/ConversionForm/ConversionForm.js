import css from "./ConversionForm.module.css";
import { Autocomplete, TextField, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import SwapButton from "./SwapButton";
import ResetButton from "./ResetButton";

const ConversionFormHeader = (props) => (
  <Typography variant="h3" variantMapping="h2">
    {props.conversionType}
  </Typography>
);

const Form = (props) => {
  const optionsList = props.optionsList;
  const convertFn = props.convertFn;

  const convertFrom = props.defaultStartUnit;
  const convertTo = props.defaultEndUnit;

  const valueToConvert = NaN;
  const [result, appendResult] = useState();

  const formik = useFormik({
    initialValues: {
      convertFrom: convertFrom,
      convertTo: convertTo,
      valueToConvert: valueToConvert,
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
    <form className={css.ConversionForm} onSubmit={formik.handleSubmit}>
      <Box sx={{ minWidth: "300px", p: 1 }}>
        <Autocomplete
          disablePortal
          id="ConversionForm-From"
          fullWidth
          sx={{ p: 1 }}
          options={optionsList}
          onChange={(e, value) => {
            formik.setFieldValue("convertFrom", value);
            formik.submitForm();
          }}
          value={formik.values.convertFrom}
          renderInput={(params) => (
            <TextField {...params} label="Convert From" />
          )}
        />
        <TextField
          fullWidth
          autoFocus
          id="ConversionForm-From"
          name="valueToConvert"
          placeholder="Please enter a value"
          sx={{ p: 1 }}
          variant="outlined"
          type="number"
          step={0.1}
          onChange={(e) => {
            formik.handleChange(e);
            formik.submitForm();
          }}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={formik.values.valueToConvert}
        />
      </Box>
      <Box sx={{ minWidth: "300px", p: 1 }}>
        <Autocomplete
          disablePortal
          id="ConversionForm-To"
          fullWidth
          sx={{ p: 1 }}
          options={optionsList}
          onChange={(e, value) => {
            formik.setFieldValue("convertTo", value);
            formik.submitForm();
          }}
          value={formik.values.convertTo}
          renderInput={(params) => <TextField {...params} label="Convert To" />}
        />

        <TextField
          InputProps={{
            readOnly: true,
          }}
          id="outlined-disabled"
          fullWidth
          sx={{ p: 1 }}
          placeholder="Result"
          type="number"
          step={0.1}
          value={result}
        />
      </Box>
      <SwapButton
        changeFn={formik.setFieldValue}
        reCalculateFn={formik.submitForm}
        startValue={formik.values.convertFrom}
        endValue={formik.values.convertTo}
      />
      <ResetButton
        changeFn={formik.setFieldValue}
        defaultStartUnit={props.defaultStartUnit}
        defaultEndUnit={props.defaultEndUnit}
        resetResultFn={() => appendResult(NaN)}
      />
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
