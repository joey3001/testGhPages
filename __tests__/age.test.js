import Age from '../src/js/age.js';

describe('Age', () => {

  let newAge; 
  beforeEach(() => {
    newAge = new Age(20);
  });

  test('should correctly create an instance of the Age object', () => {
    expect(typeof(newAge)).toEqual("object");
  });

  test('should correctly create an instance of the Age object with input provided to determine the starting age', () => {
    expect(newAge.startingAge).toEqual(20);
  });

  test(' Should correctly return a users age in mercury years (A mercury year is .24 earth years)', () => {
    newAge.mercuryYears(); 
    expect(newAge.mercuryAge).toEqual(20/.24);
  });

  test(' Should correctly return a users age in venus years (A venus year is .64 earth years)', () => {
    newAge.venusYears(); 
    expect(newAge.venusAge).toEqual(20/.64);

  test(' Should correctly return a users age in mars years (A mars year is 1.88 earth years)', () => {
    newAge.marsYears(); 
    expect(newAge.marsAge).toEqual(20/1.88);
  });
});