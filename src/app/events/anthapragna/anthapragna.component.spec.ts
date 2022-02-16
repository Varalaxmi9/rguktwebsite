import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthapragnaComponent } from './anthapragna.component';

describe('AnthapragnaComponent', () => {
  let component: AnthapragnaComponent;
  let fixture: ComponentFixture<AnthapragnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnthapragnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnthapragnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
