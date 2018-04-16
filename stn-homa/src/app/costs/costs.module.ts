import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostsListComponent } from './costs-list/costs-list.component';
import { CostsSectionComponent } from './costs-section/costs-section.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.router';
import { DomainModule } from '../domain/domain.module';
import { CostDetailsComponent } from './cost-details/cost-details.component';
import { CostCreateFormComponent } from './cost-create-form/cost-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DomainModule,
    ReactiveFormsModule
  ],
  declarations: [
    CostsListComponent,
    CostsSectionComponent,
    CostDetailsComponent,
    CostCreateFormComponent
  ],
  exports: [
    CostsSectionComponent
  ]
})
export class CostsModule { }
