import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpecificationsSectionComponent } from './car-specifications-section.component';

describe('CarInfoSectionComponent', () => {
  let component: CarSpecificationsSectionComponent;
  let fixture: ComponentFixture<CarSpecificationsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSpecificationsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSpecificationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
