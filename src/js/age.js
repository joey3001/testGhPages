export default class Age {
  constructor(start) {
    this.startingAge = start; 
    this.mercuryAge = 0; 
    this.venusAge = 0;
    this.marsAge = 0; 
  }
  mercuryYears() {
    this.mercuryAge = this.startingAge/.24; 
  }
  venusYears() {
    this.venusAge = this.startingAge/.64;
  }
  marsYears() {
  }
}
