import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDonorComponent } from './signup-donor.component';

describe('SignupDonorComponent', () => {
  let component: SignupDonorComponent;
  let fixture: ComponentFixture<SignupDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
