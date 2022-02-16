import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidenceComponent } from './guidence.component';

describe('GuidenceComponent', () => {
  let component: GuidenceComponent;
  let fixture: ComponentFixture<GuidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
