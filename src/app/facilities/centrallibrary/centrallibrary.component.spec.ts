import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrallibraryComponent } from './centrallibrary.component';

describe('CentrallibraryComponent', () => {
  let component: CentrallibraryComponent;
  let fixture: ComponentFixture<CentrallibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrallibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrallibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
