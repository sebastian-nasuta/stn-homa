import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentSectionComponent } from './document-section/document-section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DocumentSectionComponent],
  exports: [
    DocumentSectionComponent
  ]
})
export class DocumentsModule { }
