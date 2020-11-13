export default class Age {
  constructor(start) {
    this.startingAge = start; 
    this.mercuryAge = 0; 
    this.venusAge = 0;
    this.marsAge = 0; 
    this.jupiterAge = 0;
    this.remainingTime = 0; 
  }

  mercuryYears() {
    this.mercuryAge = this.startingAge/.24; 
  }

  venusYears() {
    this.venusAge = this.startingAge/.64;
  }

  marsYears() {
    this.marsAge = this.startingAge/1.88; 
  }

  jupiterYears() {
    this.jupiterAge = this.startingAge/11.86; 
  }

  remainingYears() {
    this.remainingTime = 78.54 - this.startingAge; 
  }
}

