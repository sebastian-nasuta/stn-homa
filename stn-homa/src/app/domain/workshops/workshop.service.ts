import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WorkshopService {
  workshopNames: string[];

  constructor(private http: Http) {
    this.workshopNames = [];
    this.loadWorkshopNames();
  }

  loadWorkshopNames() {
    this.http.get('api/workshops')
      .map(response => response.json())
      .subscribe(data => {
        this.workshopNames.length = 0;
        data.forEach(element => {
          this.workshopNames.push(element);
        });
      });
  }
}
