import { Component, OnInit } from '@angular/core';
import { Car } from '../../domain/cars/car';

@Component({
  selector: 'stn-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css']
})
export class ParametersListComponent implements OnInit {
  cars: Car[];

  constructor() { }

  ngOnInit() {
    this.cars = [
      new Car(1, 'Volkswagen', 'Golf', 'Hatchback', 'golfvinnumber', 115, 155),
      new Car(2, 'Nissan', 'Almera', 'Hatchback', 'almeravinnumber', 120, 160)
    ];
  }

}
