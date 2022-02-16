import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicprogrammeComponent } from './academicprogramme.component';

describe('AcademicprogrammeComponent', () => {
  let component: AcademicprogrammeComponent;
  let fixture: ComponentFixture<AcademicprogrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicprogrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
