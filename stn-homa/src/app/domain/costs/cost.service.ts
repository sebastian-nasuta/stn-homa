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

  constructor(private http: Http) {
    this.costs = [];
    // this.costs = [
    //   new Cost(
    //     1, 'Okresowe badanie techniczne', '"MAR-BUS" Handel i Usługi - Marek Ogrodzki',
    //     'Górnicza', 48, 43502, 'Czechowice-Dziedzice', new Date('2015-10-16'), 109914, 100, null
    //   ),
    //   new Cost(
    //     2, 'Wymiana oleju oraz filtrów powietrza i oleju', null, null, null, null, null,
    //     new Date('2016-01-14'), 111872, null, 'następny przegląd przy 126000 km'
    //   )
    // ];
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

  getCost(id: number): Cost {
    return this.costs.find(cost => cost.id === id);
  }

}
