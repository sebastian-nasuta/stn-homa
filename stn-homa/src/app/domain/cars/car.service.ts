import { Injectable } from '@angular/core';
import { Car } from './car';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { element } from 'protractor';

@Injectable()
export class CarService {
  cars: Car[];

  constructor(private http: Http) {
    this.cars = [];
  }

  loadCars() {
    this.http.get('api/cars')
      .map(response => response.json())
      .subscribe(data => {
        data.forEach(element => {
          this.cars.push(element);
        });
      });
  }

  // constructor() {
  //   this.cars = [
  //     new Car('Golf+', 'Volkswagen', 'Golf', 'Hatchback', 'golfvinnumber', 115, 155),
  //     new Car('Almerka', 'Nissan', 'Almera', 'Hatchback', 'almeravinnumber', 120, 160)
  //   ];
  // }

}
