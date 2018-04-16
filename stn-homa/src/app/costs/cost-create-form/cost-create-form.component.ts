import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CostService } from '../../domain/costs/cost.service';
import { Cost } from '../../domain/costs/cost';
import { CarService } from '../../domain/cars/car.service';
import { Car } from '../../domain/cars/car';
import { WorkshopService } from '../../domain/workshops/workshop.service';

@Component({
  selector: 'stn-cost-create-form',
  templateUrl: './cost-create-form.component.html',
  styleUrls: ['./cost-create-form.component.css']
})
export class CostCreateFormComponent implements OnInit {
  costForm: FormGroup;
  workshops: string[];
  selectedCar: Car[];

  constructor(private costService: CostService, private carService: CarService, private workshopService: WorkshopService) {
    this.workshops = this.workshopService.workshopNames;
    this.selectedCar = this.carService.selectedCar;
  }

  ngOnInit() {
    this.costForm = new FormGroup({
      name: new FormControl('', [Validators.required], []),
      workshop: new FormControl('BRAK', [Validators.required], []),
      date:  new FormControl('', [Validators.required], []),
      mileage: new FormControl('', [], []),
      price: new FormControl('', [], []),
      comment: new FormControl('', [], []),
    });
  }

  onFormSubmit(): void {
    const newCost = this.costForm.value as Cost;
    if (newCost.workshop === 'BRAK') {
      newCost.workshop = null;
    }
    this.costService.addNewCost(newCost);
    this.costForm.reset();
    this.costService.loadCosts();
  }
}
