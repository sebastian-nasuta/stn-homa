import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent
  ],
  exports: [
    PageComponent
  ]
})
export class LayoutModule { }
