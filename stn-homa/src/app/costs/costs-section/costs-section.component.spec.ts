import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsSectionComponent } from './costs-section.component';

describe('CostsSectionComponent', () => {
  let component: CostsSectionComponent;
  let fixture: ComponentFixture<CostsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
