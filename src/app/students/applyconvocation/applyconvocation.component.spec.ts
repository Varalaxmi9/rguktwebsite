import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyconvocationComponent } from './applyconvocation.component';

describe('ApplyconvocationComponent', () => {
  let component: ApplyconvocationComponent;
  let fixture: ComponentFixture<ApplyconvocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyconvocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyconvocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
