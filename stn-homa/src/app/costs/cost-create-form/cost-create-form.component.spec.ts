import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCreateFormComponent } from './cost-create-form.component';

describe('CostCreateFormComponent', () => {
  let component: CostCreateFormComponent;
  let fixture: ComponentFixture<CostCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
