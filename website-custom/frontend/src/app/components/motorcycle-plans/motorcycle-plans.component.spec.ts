import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePlansComponent } from './motorcycle-plans.component';

describe('MotorcyclePlansComponent', () => {
  let component: MotorcyclePlansComponent;
  let fixture: ComponentFixture<MotorcyclePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcyclePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
