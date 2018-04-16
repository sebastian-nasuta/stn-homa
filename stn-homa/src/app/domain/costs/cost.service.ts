import { Injectable } from '@angular/core';
import { Cost } from './cost';
import { Http } from '@angular/http';
import { CarService } from '../cars/car.service';
import { Car } from '../cars/car';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class CostService {
  costs: Cost[];
  selectedCost: Cost[];

  constructor(private http: Http) {
    this.costs = [];
    this.selectedCost = [];
  }

  loadCosts(name: string) {
    this.http.get('api/costs', {
      params: {
        carName: name
      }
    }).map(response => response.json())
      .subscribe(data => {
        this.costs.length = 0;
        data.forEach(element => {
          this.costs.push(element);
        });
      });
  }

  selectCost(cost: Cost) {
    this.selectedCost.length = 0;
    this.selectedCost.push(cost);
  }

  removeCost(cost: Cost): void {
    this.http.delete('api/costs', {
      params: {
        id: cost.id
      }
    }).subscribe();
  }
}
