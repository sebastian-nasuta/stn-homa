import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LayoutModule } from './layout/layout.module';
import { routes } from './app.router';
import { DocumentsModule } from './documents/documents.module';
import { CarSpecificationsModule } from './car-specifications/car-specifications.module';
import { CostsModule } from './costs/costs.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { CarService } from './domain/cars/car.service';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    DocumentsModule,
    CarSpecificationsModule,
    CostsModule,
    MainMenuModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
