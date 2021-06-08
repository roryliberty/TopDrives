import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vehicle } from "./vehicle";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService {

  constructor() { }

  createDb() {
    const vehicles = [
      {id: 101, make: 'BMW', model: 'M5', topSpeed: 155, zeroToSixty: 5.9, handling: 76, drive: 'RWD'},
      {id: 102, make: 'Honda', model: 'Civic Type R', topSpeed: 142, zeroToSixty: 6.8, handling: 78,
        drive: 'FWD'},
      {id: 103, make: 'Maserati', model: 'GranTurismo', topSpeed: 186, zeroToSixty: 4.6, handling: 84,
        drive: 'RWD'},
      {id: 104, make: 'Donkervoort', model: 'D8 Audi (E-GAS) Wide Track', topSpeed: 147,
        zeroToSixty: 4.3, handling: 84, drive: 'RWD'},
      {id: 105, make: 'Ariel', model: 'Atom 1', topSpeed: 130, zeroToSixty: 5.5, handling: 84,
        drive: 'RWD'},
      {id: 106, make: 'BMW', model: '330d Touring', topSpeed: 155, zeroToSixty: 5.3, handling: 74,
        drive: 'RWD'},
      {id: 107, make: 'Audi', model: 'S6', topSpeed: 150, zeroToSixty: 6.4, handling: 75, drive: '4WD'},
      {id: 108, make: 'Peugeot', model: '907', topSpeed: 186, zeroToSixty: 3.9, handling: 86,
        drive: 'RWD'},
      {id: 109, make: 'Mercedes-Benz AMG', model: 'S 55', topSpeed: 155, zeroToSixty: 4.6, handling: 76,
        drive: 'RWD'},
      {id: 110, make: 'Mini', model: 'Cooper Works GP', topSpeed: 149, zeroToSixty: 6.2, handling: 77,
        drive: 'FWD'}
    ];

    return {vehicles};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(vehicles: Vehicle[]): number {
    return vehicles.length > 0 ? Math.max(...vehicles.map(vehicle => vehicle.id)) + 1 : 101;
  }
}
