import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostService } from './costs/cost.service';
import { HttpModule } from '@angular/http';
import { CarService } from './cars/car.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    CostService,
    CarService
  ]
})
export class DomainModule { }
