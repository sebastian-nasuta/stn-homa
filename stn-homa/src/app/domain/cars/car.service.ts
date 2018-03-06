import { Injectable } from '@angular/core';
import { Car } from './car';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {
  cars: Car[];

  constructor() {
    this.cars = [
      new Car(1, 'Volkswagen', 'Golf', 'Hatchback', 'golfvinnumber', 115, 155),
      new Car(2, 'Nissan', 'Almera', 'Hatchback', 'almeravinnumber', 120, 160)
    ];
  }

}
