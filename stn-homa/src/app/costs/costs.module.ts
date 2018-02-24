import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostsListComponent } from './costs-list/costs-list.component';
import { CostsSectionComponent } from './costs-section/costs-section.component';
import { CostDetailsComponent } from './cost-details/cost-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CostsListComponent,
    CostsSectionComponent,
    CostDetailsComponent],
  exports: [
    CostsSectionComponent
  ]
})
export class CostsModule { }
