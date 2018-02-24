import { DocumentSectionComponent } from './documents/document-section/document-section.component';
import { CarInfoSectionComponent } from './specifications/car-info-section/car-info-section.component';
import { CostsSectionComponent } from './costs/costs-section/costs-section.component';

export const routes = [
    { path: 'car-info', component: CarInfoSectionComponent},
    { path: 'documents', component: DocumentSectionComponent },
    { path: 'costs', component: CostsSectionComponent },
    { path: '', redirectTo: 'car-info', pathMatch: 'full' }
];
