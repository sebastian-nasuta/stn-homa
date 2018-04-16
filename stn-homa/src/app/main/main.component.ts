import { Component, OnInit } from '@angular/core';
import { CarService } from '../domain/cars/car.service';
import { Car } from '../domain/cars/car';

@Component({
  selector: 'stn-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  car: Car[];

  constructor(private carService: CarService) {
    this.car = [];
  }

  ngOnInit() {
    this.car = this.carService.selectedCar;
  }

}
