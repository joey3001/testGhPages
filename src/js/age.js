import $ from 'jquery';

export default class Age {
  constructor(start) {
    this.startingAge = start; 
    this.ageBoolean;
    this.mercuryAge; 
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
    this.remainingTime; 
    this.remainingMercuryTime; 
    this.remainingVenusTime; 
    this.remainingMarsTime; 
    this.remainingJupiterTime;
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

  lifeExpectancyBoolean() {
    if (this.startingAge < 78.54) {
      this.ageBoolean = true;
    }
    else {
      this.ageBoolean = false;
    }
  }

  lifeExpectancyPrint(selector) {
    if (this.ageBoolean) {
      $(selector).text(`Your remaining time on earth: ${this.remainingTime.toFixed()} Years`).fadeIn("Slow");
    }
    else {
      $(selector).text(`WARNING => SUBJECT IS PASSED PROGRAM DETERMINED LIFE SPAN BY ${this.remainingTime.toFixed()} YEARS`).fadeIn("Slow");
    }
  }

  remainingMercuryYears() {
    this.remainingMercuryTime = this.remainingTime/.24; 
  }

  remainingVenusYears() {
    this.remainingVenusTime = this.remainingTime/.64; 
  }
  
  remainingMarsYears() {
    this.remainingMarsTime = this.remainingTime/1.88;
  }

  remainingJupiterYears() {
    this.remainingJupiterTime = this.remainingTime/11.86; 
  }
}
