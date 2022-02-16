import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechfestComponent } from './techfest.component';

describe('TechfestComponent', () => {
  let component: TechfestComponent;
  let fixture: ComponentFixture<TechfestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechfestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
