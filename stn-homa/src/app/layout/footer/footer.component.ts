import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  author: string;

  ngOnInit() {
    this.year = 2018;
    this.author = 'Sebastian Tomasz Nasuta';
  }

}
