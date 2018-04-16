import { Component, OnInit } from '@angular/core';
import { Cost } from '../../domain/costs/cost';
import { CostService } from '../../domain/costs/cost.service';
import { CarService } from '../../domain/cars/car.service';
import { Car } from '../../domain/cars/car';

@Component({
  selector: 'stn-cost-details',
  templateUrl: './cost-details.component.html',
  styleUrls: ['./cost-details.component.css']
})
export class CostDetailsComponent implements OnInit {
  selectedCost: Cost[];
  selectedCar: Car[];

  constructor(private costService: CostService, private carService: CarService) {
    this.selectedCost = [];
    this.selectedCar = [];
  }

  ngOnInit() {
    this.selectedCost = this.costService.selectedCost;
    this.selectedCar = this.carService.selectedCar;
  }

  remove() {
    this.costService.removeCost(this.selectedCost[0]);
    this.costService.loadCosts(this.selectedCar[0].name);
  }

}
