import { Injectable } from '@angular/core';
import { Cost } from './cost';
import { Http } from '@angular/http';
import { CarService } from '../cars/car.service';
import { Car } from '../cars/car';

@Injectable()
export class CostService {
  costs: Cost[];
  selectedCost: Cost[];
  selectedCar: Car[];

  constructor(private http: Http, private carService: CarService) {
    this.costs = [];
    this.selectedCost = [];
    this.selectedCar = carService.selectedCar;
  }

  loadCosts(name: string = null) {
    let carName;
    if (name == null) {
      carName = this.selectedCar[0].name;
    } else {
      carName = name;
    }

    this.http.get('api/costs', {
      params: {
        carName: carName
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

  addNewCost(cost: Cost): void {
    this.http.post('api/costs', {}, {
      params: {
        name: cost.name,
        workshop: cost.workshop,
        date: cost.date,
        mileage: cost.mileage,
        price: cost.price,
        comment: cost.comment
      }
    }).subscribe();
  }

  removeCost(cost: Cost): void {
    this.http.delete('api/costs', {
      params: {
        id: cost.id
      }
    }).subscribe();
    this.loadCosts();
  }
}
