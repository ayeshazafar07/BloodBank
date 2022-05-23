import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDonorComponent } from './login-donor.component';

describe('LoginDonorComponent', () => {
  let component: LoginDonorComponent;
  let fixture: ComponentFixture<LoginDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
