import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostService } from './costs/cost.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    CostService
  ]
})
export class DomainModule { }
