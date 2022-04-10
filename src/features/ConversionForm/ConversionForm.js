import css from "./ConversionForm.module.css";
import {
  Autocomplete,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
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
    <form className={css.ConversionForm} onSubmit={formik.handleSubmit}>
      <Box className={css.ConversionFormHalf}>
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
          value={formik.values.valueToConvert}
        />
      </Box>

      <Box className={css.ConversionFormHalf}>
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
          disabled
          id="outlined-disabled"
          fullWidth
          sx={{ p: 1 }}
          placeholder="Result"
          type="number"
          step={0.1}
          value={result}
        />
      </Box>
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
