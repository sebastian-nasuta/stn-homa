import { Component, OnInit } from '@angular/core';
import { Cost } from '../../domain/costs/cost';
import { CostService } from '../../domain/costs/cost.service';

@Component({
  selector: 'stn-cost-details',
  templateUrl: './cost-details.component.html',
  styleUrls: ['./cost-details.component.css']
})
export class CostDetailsComponent implements OnInit {
  selectedCost: Cost[];

  constructor(private costService: CostService) {
    this.selectedCost = [];
  }

  ngOnInit() {
    this.selectedCost = this.costService.selectedCost;
  }

  remove() {
    this.costService.removeCost(this.selectedCost[0]);
  }

}
