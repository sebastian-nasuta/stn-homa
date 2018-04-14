import { Component, OnInit } from '@angular/core';
import { Cost } from '../../domain/costs/cost';
import { CostService } from '../../domain/costs/cost.service';

@Component({
  selector: 'stn-costs-list',
  templateUrl: './costs-list.component.html',
  styleUrls: ['./costs-list.component.css']
})
export class CostsListComponent implements OnInit {
  costs: Cost[];
  selectedCost: Cost;

  constructor(private costService: CostService) {
    this.costs = [];
  }

  ngOnInit() {
    this.costs = this.costService.costs;
  }

  select(cost: Cost) {
    this.selectedCost = cost;
  }
}
