import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsListComponent } from './sections-list/sections-list.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { CarSelectorComponent } from './car-selector/car-selector.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    SectionsListComponent,
    CarSelectorComponent,
    BrandLogoComponent,
  ],
  exports: [
    SectionsListComponent,
    CarSelectorComponent,
    BrandLogoComponent
  ]
})
export class MainMenuModule { }
