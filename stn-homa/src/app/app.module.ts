import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LayoutModule } from './layout/layout.module';
import { routes } from './app.router';
import { DocumentsModule } from './documents/documents.module';
import { SpecificationsModule } from './specifications/specifications.module';
import { CostsModule } from './costs/costs.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    DocumentsModule,
    SpecificationsModule,
    CostsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
