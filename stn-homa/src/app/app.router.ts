import { DocumentSectionComponent } from './documents/document-section/document-section.component';
import { CarSpecificationsSectionComponent } from './car-specifications/car-specifications-section/car-specifications-section.component';
import { CostsSectionComponent } from './costs/costs-section/costs-section.component';
import { CostDetailsComponent } from './costs/cost-details/cost-details.component';

export const routes = [
    { path: 'car-info', component: CarSpecificationsSectionComponent},
    { path: 'documents', component: DocumentSectionComponent },
    { path: 'costs', component: CostsSectionComponent },
    { path: 'cost/:id', component: CostDetailsComponent },
    { path: '', redirectTo: 'car-info', pathMatch: 'full' }
];
