import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSimpleComponent } from './social-simple.component';

describe('SocialSimpleComponent', () => {
  let component: SocialSimpleComponent;
  let fixture: ComponentFixture<SocialSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
