import Building from './5-building.js'

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.sqft = sqft;
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floor) {
    this._floors = floor;
  }

 get sqft() {
    return this._sqft;
  }

  set sqft(area) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
