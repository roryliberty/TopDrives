export interface Vehicle {
  id: number;
  make: string;
  model: string;
  topSpeed?: number;
  zeroToSixty?: number;
  handling?: number;
  drive?: string;
}

export class VehicleMaker {
  static create(event: Vehicle) {
    return { id: event.id, make: event.make, model: event.model, topSpeed: event.topSpeed,
            zeroToSixty: event.zeroToSixty, handling: event.handling, drive: event.drive };
  }
}
