import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileDonorComponent } from './editprofile-donor.component';

describe('EditprofileDonorComponent', () => {
  let component: EditprofileDonorComponent;
  let fixture: ComponentFixture<EditprofileDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofileDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
