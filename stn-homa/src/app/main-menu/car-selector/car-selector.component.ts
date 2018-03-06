import { Component, OnInit } from '@angular/core';
import { Car } from '../../domain/cars/car';
import { FormGroup, FormControl } from '@angular/forms';
import { CarService } from '../../domain/cars/car.service';

@Component({
  selector: 'stn-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.css']
})
export class CarSelectorComponent implements OnInit {
  cars: Car[];
  carSelect: FormGroup;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carSelect = new FormGroup({
      name: new FormControl('', [], [])
    });
    this.cars = this.carService.cars;
  }
}
