import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiccalendarComponent } from './academiccalendar.component';

describe('AcademiccalendarComponent', () => {
  let component: AcademiccalendarComponent;
  let fixture: ComponentFixture<AcademiccalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademiccalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiccalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
