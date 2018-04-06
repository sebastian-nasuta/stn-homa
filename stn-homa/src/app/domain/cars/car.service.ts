import { Injectable } from '@angular/core';
import { Car } from './car';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {
  cars: Car[];
  selectedCar: Car[];

  constructor(private http: Http) {
    // this.cars = [new Car('test', 'test', 'test', 'test', 'test', 1, 1)];
    this.cars = [];
    this.selectedCar = [];
    this.loadCars();
  }

  loadCars() {
    this.http.get(`api/cars`)
      .map(response => response.json())
      .subscribe(data => {
        data.forEach(item => {
          this.cars.push(item);
        });
      });
  }

  setName(name: string) {
    this.selectedCar.length = 0;
    const item = this.cars.find(car => car.name === name);
    this.selectedCar.push(item);
  }
}
