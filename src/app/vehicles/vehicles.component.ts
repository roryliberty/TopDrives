/* Place to list my vehicles
   Hopefully I'll be able to sort as well at some point. */
import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from "../vehicle.service";
import { MessageService} from "../message.service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(private vehicleService: VehicleService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getVehicles()
  }

  // Exposes MOCKCARS array for binding
  mockCars: Vehicle[] = [];

  // Assigns clicked vehicle from the template to selectedVehicle
  selectedVehicle?: Vehicle;
  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
    this.messageService.add(`VehiclesComponent: Selected hero id=${vehicle.id}`);
  }

  getVehicles(): void {
    this.vehicleService.getVehicles()
      .subscribe(mockCars => this.mockCars = mockCars);
  }
}


