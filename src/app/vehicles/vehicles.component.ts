import { Component, OnInit } from '@angular/core';
import { Vehicle, VehicleMaker } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  // This tells me what a vehicle should look like
  constructor(public id: number, public make: string, public model: string) { }

  ngOnInit(): void {
  }

}
// This makes a vehicle
class Vroom {
  static create(event: VehiclesComponent) {
    return { id: event.id, make: event.make, model: event.model}
  }
}
