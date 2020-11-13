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
});