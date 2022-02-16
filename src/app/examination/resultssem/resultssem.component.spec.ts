import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultssemComponent } from './resultssem.component';

describe('ResultssemComponent', () => {
  let component: ResultssemComponent;
  let fixture: ComponentFixture<ResultssemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultssemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultssemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
