export default class Age {
  constructor(start) {
    this.startingAge = start; 
    this.mercuryAge = 0; 
  }

  mercuryYears() {
    this.mercuryAge = this.startingAge/.24; 
  }
}
