import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInfoSectionComponent } from './car-info-section/car-info-section.component';
import { ParametersListComponent } from './parameters-list/parameters-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarInfoSectionComponent,
    ParametersListComponent
  ],
  exports: [
    CarInfoSectionComponent
  ]
})
export class SpecificationsModule { }
