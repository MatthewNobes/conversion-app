//import css from './MassConversion.module.css';
import '../../App.css'
import { Autocomplete, TextField, Button} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { convertMass } from './MassFunctions';

const distanceOptions = ["Kilograms", "Pounds", "Tonnes"]

const ConversionForm = () => {
    const [convertFrom, appendConvertFrom] = useState('Kilograms');
    const [convertTo, appendConvertTo] = useState('Pounds');

    const [valueToConvert, appendValueToConvert] = useState(6.5);
    const [result, appendResult] = useState(0);

    const convert = (values) => {
        const result = convertMass(values.convertFrom, values.convertTo, values.valueToConvert);
        return result;
    }

    const formik = useFormik({
        initialValues: {
            convertFrom: '',
            convertTo: '',

            valueToConvert: 0,
            result: 0,
        },

        onSubmit: (values) => { 
            debugger;
            convert(values);
            console.log(values.result);
        }
    });

    return (
        <form className='ConversionForm'>
            <div className='ConversionForm-Half'>
                <Autocomplete
                    disablePortal
                    id="ConversionForm-From"
                    className="ConversionForm-FormElement"
                    options={distanceOptions}
                    onChange={(e, value) => formik.setFieldValue("convertFrom", value)} 
                    value={formik.values.convertFrom}
                    renderInput={(params) => <TextField {...params} label="Convert From" />}
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
            
            <div className='ConversionForm-Half'>
                <Autocomplete
                    disablePortal
                    id="ConversionForm-To"
                    className="ConversionForm-FormElement"
                    options={distanceOptions}
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
            <Button className="SubmitForm" varient="outlined" type='submit'>Submit</Button>
        </form>
    )
}

export default function MassConversion() {
  return (
      <>
        <h1 className="PageTitle">
            Mass Conversion
        </h1>
        <ConversionForm />
      </>
      
  );
}