import { Component, OnInit } from '@angular/core';
import { Cost } from '../../domain/costs/cost';

@Component({
  selector: 'stn-costs-list',
  templateUrl: './costs-list.component.html',
  styleUrls: ['./costs-list.component.css']
})
export class CostsListComponent implements OnInit {
  costs: Cost[];

  constructor() { }

  ngOnInit() {
    this.costs = [
      new Cost(
        1,
        'Okresowe badanie techniczne',
        '"MAR-BUS" Handel i Usługi - Marek Ogrodzki',
        'Górnicza',
        48,
        43502,
        'Czechowice-Dziedzice',
        16102015,
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
        14012016,
        111872,
        null,
        'następny przegląd przy 126000 km'
      )
    ];
  }

}
