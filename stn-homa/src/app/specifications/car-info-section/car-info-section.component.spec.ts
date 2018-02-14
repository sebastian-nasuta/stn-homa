import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoSectionComponent } from './car-info-section.component';

describe('CarInfoSectionComponent', () => {
  let component: CarInfoSectionComponent;
  let fixture: ComponentFixture<CarInfoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInfoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
