import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencehallComponent } from './conferencehall.component';

describe('ConferencehallComponent', () => {
  let component: ConferencehallComponent;
  let fixture: ComponentFixture<ConferencehallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencehallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencehallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
