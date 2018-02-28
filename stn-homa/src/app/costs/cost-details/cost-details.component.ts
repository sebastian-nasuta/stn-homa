import { Component, OnInit } from '@angular/core';
import { CostService } from '../../domain/costs/cost.service';
import { Cost } from '../../domain/costs/cost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stn-cost-details',
  templateUrl: './cost-details.component.html',
  styleUrls: ['./cost-details.component.css']
})
export class CostDetailsComponent implements OnInit {
  cost: Cost;

  constructor(private route: ActivatedRoute, private costService: CostService) { }

  ngOnInit() {
    this.getCost();
  }

  getCost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cost = this.costService.getCost(id);
  }
}
