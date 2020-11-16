import Age from '../src/js/age.js';
import $ from 'jquery'

describe('Age', () => {

  let newAge; 
  beforeEach(() => {
    newAge = new Age(20);
    newAge.remainingYears(); 
  });

test('Should correctly create an instance of the Age object', () => {
    expect(typeof(newAge)).toEqual("object");
  });

test('Should correctly create an instance of the Age object with input provided to determine the starting age', () => {
    expect(newAge.startingAge).toEqual(20);
  });

test('Should correctly return a users age in mercury years (A mercury year is .24 earth years)', () => {
    newAge.mercuryYears(); 
    expect(newAge.mercuryAge).toEqual(20/.24);
  });

test('Should correctly return a users age in venus years (A venus year is .64 earth years)', () => {
    newAge.venusYears(); 
    expect(newAge.venusAge).toEqual(20/.64);
  });

test('Should correctly return a users age in mars years (A mars year is 1.88 earth years)', () => {
    newAge.marsYears(); 
    expect(newAge.marsAge).toEqual(20/1.88);
  });

test('Should correctly return a users age in jupier years (A jupiter year is 11.86 earth years)', () => {
    newAge.jupiterYears(); 
    expect(newAge.jupiterAge).toEqual(20/11.86);
  });

test('Should correctly return a users remaining years as calculated with average life expectancy in the US', () => {
    expect(newAge.remainingTime).toEqual(78.54-20);
  });

test('If a user has surpassed the average life expectancy, Should correctly return the number of years they have lived past the average life expectancy', () => {
    newAge.startingAge = 80.54; 
    newAge.remainingYears();
    expect(newAge.remainingTime).toEqual(2);
  });

test('If a user has not surpassed the average life expectancy, should return a true boolean value', () => {
    newAge.lifeExpectancyBoolean();
    expect(newAge.ageBoolean).toEqual(true);
  });  

test('If a user has surpassed the average life expectancy, should return a false boolean value', () => {
    newAge.startingAge = 80; 
    newAge.lifeExpectancyBoolean();
    expect(newAge.ageBoolean).toEqual(false);
  });

test('If a user has not surpassed the average life expectancy, should print a certain message to a specified selector', () => {
    document.body.innerHTML = '<p id="earth"></p>';
    newAge.lifeExpectancyBoolean();
    newAge.lifeExpectancyPrint('#earth')
    expect($('#earth').text()).toEqual(`Your remaining time on earth: ${newAge.remainingTime.toFixed()} Years`);
  });

test('If a user has surpassed the average life expectancy, should print a different message to a specified selector', () => {
    document.body.innerHTML = '<p id="earth"></p>';
    newAge.startingAge = 80;
    newAge.lifeExpectancyBoolean();
    newAge.lifeExpectancyPrint('#earth')
    expect($('#earth').text()).toEqual(`WARNING => SUBJECT IS PASSED PROGRAM DETERMINED LIFE SPAN BY ${newAge.remainingTime.toFixed()} YEARS`);
  });

test('Should return the users remaining years left in mercury years', () => {
    newAge.remainingMercuryYears();
    expect(newAge.remainingMercuryTime).toEqual((78.54-20)/.24);
  });

test('Should return the users remaining years left in venus years', () => {
    newAge.remainingVenusYears();
    expect(newAge.remainingVenusTime).toEqual((78.54-20)/.64);
  });

test('Should return the users remaining years left in mars years', () => {
    newAge.remainingMarsYears();
    expect(newAge.remainingMarsTime).toEqual((78.54-20)/1.88);
  });

test('Should return the users remaining years left in jupiter years', () => {
    newAge.remainingJupiterYears();
    expect(newAge.remainingJupiterTime).toEqual((78.54-20)/11.86);
  });
});
