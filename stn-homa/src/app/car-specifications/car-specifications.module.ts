import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametersListComponent } from './parameters-list/parameters-list.component';
import { DomainModule } from '../domain/domain.module';
import { CarSpecificationsSectionComponent } from './car-specifications-section/car-specifications-section.component';

@NgModule({
  imports: [
    CommonModule,
    DomainModule
  ],
  declarations: [
    CarSpecificationsSectionComponent,
    ParametersListComponent
  ],
  exports: [
    CarSpecificationsSectionComponent
  ]
})
export class CarSpecificationsModule { }
