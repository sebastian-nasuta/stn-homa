import { Injectable } from '@angular/core';
import { Car } from './car';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { CostService } from '../costs/cost.service';

@Injectable()
export class CarService {
  carNames: string[];
  selectedCar: Car[];

  constructor(private http: Http) {
    this.carNames = [];
    this.loadCarNames();
    this.selectedCar = [];
  }

  loadCarNames() {
    this.http.get('api/cars')
      .map(response => response.json())
      .subscribe(data => {
        data.forEach(item => {
          this.carNames.push(item.name);
        });
      });
  }

  setName(name: string) {
    this.http.get('api/cars', {
      params: {
        name: name
      }
    }).map(response => response.json())
      .subscribe(data => {
        this.selectedCar.length = 0;
        data.forEach(element => {
          this.selectedCar.push(element);
        });
      });
    }
  }
