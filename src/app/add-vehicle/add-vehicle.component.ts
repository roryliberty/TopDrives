// This is where I want to be able to enter vehicle info and have it update the database?
// The database is just an array (for now)
import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
