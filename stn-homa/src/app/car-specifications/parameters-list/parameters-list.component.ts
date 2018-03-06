import { Component, OnInit } from '@angular/core';
import { Car } from '../../domain/cars/car';
import { CarService } from '../../domain/cars/car.service';

@Component({
  selector: 'stn-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css']
})
export class ParametersListComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.cars;
  }

}
