import { Injectable } from '@angular/core';
import { Cost } from './cost';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CostService {
  costs: Cost[];

  constructor() {
    this.costs = [
      new Cost(
        1,
        'Okresowe badanie techniczne',
        '"MAR-BUS" Handel i Usługi - Marek Ogrodzki',
        'Górnicza',
        48,
        43502,
        'Czechowice-Dziedzice',
        new Date('2015-10-16'),
        109914,
        100,
        null
      ),
      new Cost(
        2,
        'Wymiana oleju oraz filtrów powietrza i oleju',
        null,
        null,
        null,
        null,
        null,
        new Date('2016-01-14'),
        111872,
        null,
        'następny przegląd przy 126000 km'
      )
    ];
  }

  getCost(id: number): Cost {
    return this.costs.find(cost => cost.id === id);
  }

}
