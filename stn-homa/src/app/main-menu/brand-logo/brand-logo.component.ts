import { Component, OnInit } from '@angular/core';
import { Car } from '../../domain/cars/car';
import { CarService } from '../../domain/cars/car.service';

@Component({
  selector: 'stn-brand-logo',
  templateUrl: './brand-logo.component.html',
  styleUrls: ['./brand-logo.component.css']
})
export class BrandLogoComponent implements OnInit {
  car: Car[];

  constructor(private carService: CarService) {
    this.car = [];
  }

  ngOnInit() {
    this.car = this.carService.selectedCar;
  }

}
