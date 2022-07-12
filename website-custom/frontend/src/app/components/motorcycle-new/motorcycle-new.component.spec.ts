import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleNewComponent } from './motorcycle-new.component';

describe('MotorcycleNewComponent', () => {
  let component: MotorcycleNewComponent;
  let fixture: ComponentFixture<MotorcycleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
