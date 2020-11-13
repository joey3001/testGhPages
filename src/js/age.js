export default class Age {
  constructor(start) {
    this.startingAge = start; 
    this.mercuryAge = 0; 
    this.venusAge = 0;
    this.marsAge = 0; 
    this.jupiterAge = 0;
    this.remainingTime = 0; 
    this.remainingMercuryTime = 0; 
    this.remainingVenusTime = 0; 
    this.remainingMarsTime = 0; 
    this.remainingJupiterTime = 0; 
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
    if (this.startingAge > 78.54) {
      this.remainingTime = this.startingAge-78.54; 
    }
    else {
      this.remainingTime = 78.54 - this.startingAge; 
    }
  }

  remainingMercuryYears() {
    this.remainingMercuryTime = this.remainingTime/.24; 
  }

  remainingVenusYears() {
  }
}

