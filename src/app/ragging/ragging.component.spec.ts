import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaggingComponent } from './ragging.component';

describe('RaggingComponent', () => {
  let component: RaggingComponent;
  let fixture: ComponentFixture<RaggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
