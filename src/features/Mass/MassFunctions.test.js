import {
    convertMass,
    convertKg,
    tonneToKg,
    lbToKg,
    kgToTonne, 
    kgToLb,
} from './MassFunctions';


describe('Testing the convertMass function', () => {
    it('testing valid conversion from tonnes to kilograms', () => {
        const expectedResult = 17000
        expect(convertMass('Tonnes', 'Kilograms', 17)).toBe(expectedResult);
    });
    it('testing valid decimal conversion from tonnes to kilograms', () => {
        const expectedResult = 14600
        expect(convertMass('Tonnes', 'Kilograms', 14.6)).toBe(expectedResult);
    });
    it('testing valid decimal string conversion from tonnes to kilograms', () => {
        const expectedResult = 14600
        expect(convertMass('Tonnes', 'Kilograms', '14.6')).toBe(expectedResult);
    });
    it('testing valid conversion from pounds to kilograms', () => {
        const expectedResult = 20.4117
        expect(convertMass('Pounds', 'Kilograms', 45)).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing valid decimal conversion from pounds to kilograms', () => {
        const expectedResult = 5.7470153
        expect(convertMass('Pounds', 'Kilograms', 12.67)).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing valid decimal string conversion from pounds to kilograms', () => {
        const expectedResult = 5.7470153
        expect(convertMass('Pounds', 'Kilograms', '12.67')).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing valid conversion from pounds to tonnes', () => {
        const expectedResult = 6.1076213
        expect(convertMass('Pounds', 'Tonnes', 13465)).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing valid decimal conversion from pounds to tonnes', () => {
        const expectedResult = 655.103774082
        expect(convertMass('Pounds', 'Tonnes', 1444256.6)).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing valid decimal string conversion from pounds to tonnes', () => {
        const expectedResult = 655.103774082
        expect(convertMass('Pounds', 'Tonnes', '1444256.6')).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing valid conversion from kilograms to tonnes', () => {
        const expectedResult = 13.465
        expect(convertMass('Kilograms', 'Tonnes', 13465)).toBe(expectedResult);
    });
    it('testing valid decimal conversion from kilograms to tonnes', () => {
        const expectedResult = 1.2234
        expect(convertMass('Kilograms', 'Tonnes', 1223.4)).toBe(expectedResult);
    });
    it('testing valid decimal string conversion from kilograms to tonnes', () => {
        const expectedResult = 1.2234
        expect(convertMass('Kilograms', 'Tonnes', '1223.4')).toBe(expectedResult);
    });
    it('testing valid conversion from kilograms to pounds', () => {
        const expectedResult = 295.419
        expect(convertMass('Kilograms', 'Pounds', 134)).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing valid decimal conversion from kilograms to pounds', () => {
        const expectedResult = 100.7513
        expect(convertMass('Kilograms', 'Pounds', 45.7)).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing valid decimal string conversion from kilograms to pounds', () => {
        const expectedResult = 100.7513
        expect(convertMass('Kilograms', 'Pounds', '45.7')).toBeCloseTo(expectedResult, 0.5);
    });
    it('testing a conversion where no parameters are passed in ', () => {
        expect(convertMass()).toBe(null);
    });
    it('testing a conversion where no valueToConvert is passed in ', () => {
        expect(convertMass('Kilograms', 'Pounds')).toBe(null);
    });
})

describe('Testing the tonneToKg function', () => {
    it('converts correctly with correct parameters', () => {
        expect(tonneToKg(17)).toBe(17000);
    });
    it('converts correctly with a decimal parameters', () => {
        expect(tonneToKg(12.6)).toBe(12600);
    });
    it('conversion should convert correctly when passed a numerical string', () => {
        expect(tonneToKg('18.6')).toBe(18600);
    });
    it('conversion should return null when passed a random string', () => {
        expect(tonneToKg('hello world')).toBe(NaN);
    });
});

describe('Testing the lbToKg function', () => {
    it('converts correctly with correct parameters', () => {
        expect(lbToKg(120)).toBeCloseTo(54.42, 0.5);
    });
    it('converts correctly with a decimal parameters', () => {
        expect(lbToKg(26.6)).toBeCloseTo(12.06556, 0.5);
    });
    it('conversion should convert correctly when passed a numerical string', () => {
        expect(lbToKg(26.6)).toBeCloseTo(12.06556, 0.5);
    });
    it('conversion should return null when passed a random string', () => {
        expect(lbToKg('hello world')).toBe(NaN);
    });
});

describe('Testing the kgToLb function', () => {
    it('converts correctly with correct parameters', () => {
        expect(kgToLb(145)).toBeCloseTo(319.67, 0.5);
    });
    it('converts correctly with a decimal parameters', () => {
        expect(kgToLb(67.5)).toBeCloseTo(148.812, 0.5);
    });
    it('conversion should convert correctly when passed a numerical string', () => {
        expect(kgToLb('67.5')).toBeCloseTo(148.812, 0.5);
    });
    it('conversion should return null when passed a random string', () => {
        expect(kgToLb('hello world')).toBe(NaN);
    });
});

describe('Testing the kgToTonne function', () => {
    it('converts correctly with correct parameters', () => {
        expect(kgToTonne(15800)).toBe(15.8);
    });
    it('converts correctly with a decimal parameters', () => {
        expect(kgToTonne(36000.2)).toBe(36.0002);
    });
    it('conversion should convert correctly when passed a numerical string', () => {
        expect(kgToTonne('36000.2')).toBe(36.0002);
    });
    it('conversion should return null when passed a random string', () => {
        expect(kgToTonne('hello world')).toBe(NaN);
    });
});