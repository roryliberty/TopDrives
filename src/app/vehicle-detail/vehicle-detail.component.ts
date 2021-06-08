// This component only receives a vehicle object through it's vehicle property and displays it.
import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from "../vehicle";

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  @Input() vehicle?: Vehicle;
  constructor() { }

  ngOnInit(): void {
  }

}
