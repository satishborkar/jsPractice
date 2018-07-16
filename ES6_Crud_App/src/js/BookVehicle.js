import { Vehicle } from "./Vehicle";

export class BookVehicle extends Vehicle {
  constructor() {
    super();
    this.from;
    this.to;
    this.delivaryDate;
    this.materialType;
  }

  details() {
    return {
      from: this.from,
      to: this.to,
      delivaryDate: this.delivaryDate,
      materialType: this.materialType
    };
  }
}
