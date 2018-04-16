import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from '../../domain/cars/car';
import { FormGroup, FormControl } from '@angular/forms';
import { CarService } from '../../domain/cars/car.service';
import { CostService } from '../../domain/costs/cost.service';

@Component({
  selector: 'stn-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.css']
})
export class CarSelectorComponent implements OnInit {
  carNames: string[];
  carSelect: FormGroup;

  constructor(private carService: CarService, private costService: CostService) { }

  ngOnInit() {
    this.carNames = this.carService.carNames;
    this.carSelect = new FormGroup({
      name: new FormControl('', [], [])
    });
  }

  select() {
    const name = this.carSelect.value.name;

    if (name) {
      this.carService.setName(name);
      this.costService.loadCosts(name);
    }
  }
}
