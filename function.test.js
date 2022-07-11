const {reverseString, stringLength, Calculator, capitalize} = require('./function');


test('sum number of letters in string', () => {
    //arrange
    const string = 'hello';
    //act
    const actual = stringLength(string);
    //assert
    expect(stringLength('hello')).toBe(5); });  //5

test('Should return Error if string count isnt between 0 & 10', () => {
    //arrange
    const string = 'helloworldhowareyou';
    //act
    const actual = () => {

    stringLength(string);
    }

    //assert
    expect(actual).toThrowError(); });  //this is a function that throws an error

test('should return reverse string', () => {
    //arrange
    const string = 'hello';
    //act
    const actual = reverseString(string);
    //assert
    expect(actual).toBe(reverseString(string)); }); //should return reverse string

describe('add', () => {
    test(' 1 + 2 should return 3 ', () => {
        //arrange
        const num1 = 1;
        const num2 = 2;
        //act
        const calculator = new Calculator(num1, num2);
        const actual = calculator.add();
        //assert
        expect(actual).toBe(3); }); //end of test
});


describe('subtract', () => {
    test('2 - 1 should return 1', () => {
        //arrange
        const num1 = 2;
        const num2 = 1;
        //act
        const calculator = new Calculator(num1, num2);
        const actual = calculator.subtract();
        //assert
        expect(actual).toBe(1); }); //end of test
});

describe('multiply', () => {
test(' 1 * 2 should return 2', () => { 
    //arrange
    const num1 = 1;
    const num2 = 2;
    //act
    const calculator = new Calculator(num1, num2);
    const actual = calculator.multiply();
    //assert
    expect(actual).toBe(2); });  //end of test
});

describe('divide', () => {
    test(' 2 / 1 should return 2', () => { 
        //arrange
        const num1 = 2;
        const num2 = 1;
        //act
        const calculator = new Calculator(num1, num2);
        const actual = calculator.divide();
        //assert
        expect(actual).toBe(2); });  //end of test
    }); //end of describe

test('first letter sould be returnerd capitalized', () => {
    //arrange
    const string = 'hello';
    //act
    const actual = string[0].toUpperCase();
    //assert
    expect(actual).toBe('H'); }); //end of test