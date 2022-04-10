const convertMass = (inputUnit, outputUnit, valueToConvert) => {
    let outputValue
    try {
        if(inputUnit === undefined || outputUnit === undefined || valueToConvert === undefined) throw "missing parameters";
        let kgValue = valueToConvert;
        switch(inputUnit) {
            case 'Tonnes':
                kgValue = tonneToKg(valueToConvert);
                break;
            case 'Pounds':
                kgValue = lbToKg(valueToConvert);
                break;
            default:
                break;  
        } 
        outputValue = convertKg(outputUnit, kgValue);
    } catch (error) {
        outputValue = null;
    }
    return outputValue;
}

const convertKg = (outputUnit, unitToConvert) => {
    let outputValue = unitToConvert;
    switch(outputUnit) {
        case 'Tonnes':
            outputValue = kgToTonne(unitToConvert);
            break;
        case 'Pounds':
            outputValue = kgToLb(unitToConvert);
            break;
        default:
            break
    } 
    return outputValue;
}

/**
 * 
 * @param {decimal} tonne The tonne value to convert.
 * @returns {decimal} The kilogram value of the result of the conversion from tonnes.
 */
const tonneToKg = (tonne) => {
    try {
        const kg = tonne * 1000;
        return kg;
    } catch (error) {
        return null;
    }
}

/**
 * 
 * @param {decimal} lb The pound value inputted in.
 * @returns {decimal} The kilogram value of the result of the conversion.
 */
 const lbToKg = (lb) => {
    try {
        const kg = lb / 2.205;
        return kg;
    } catch (error) {
        return null;
    }
}

/**
 * This function converts kilograms to pounds.
 * @param {decimal} kg The kilogram value to be converted. 
 * @returns {decimal} The pound value of the conversion.
 */
const kgToLb = (kg) => {
    const lb = kg * 2.205;
    return lb;
}

/**
 * The conversion from kilogram to tonnes
 * @param {decimal} kg The kilogram value to be converted.
 * @returns {decimal} The tonne value to be the result
 */
const kgToTonne = (kg) => {
    const tonne = kg / 1000;
    return tonne;
}

export {
    convertMass,
    convertKg,
    tonneToKg,
    lbToKg,
    kgToTonne, 
    kgToLb,
}