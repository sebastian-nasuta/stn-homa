import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsListComponent } from './sections-list/sections-list.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { CarSelectorComponent } from './car-selector/car-selector.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    SectionsListComponent,
    CarSelectorComponent,
  ],
  exports: [
    SectionsListComponent,
    CarSelectorComponent
  ]
})
export class MainMenuModule { }
