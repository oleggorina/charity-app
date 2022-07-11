import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderControlComponent } from './slider-control.component';

describe('SliderControlComponent', () => {
  let component: SliderControlComponent;
  let fixture: ComponentFixture<SliderControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
