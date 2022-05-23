import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsTabAdminComponent } from './patients-tab-admin.component';

describe('PatientsTabAdminComponent', () => {
  let component: PatientsTabAdminComponent;
  let fixture: ComponentFixture<PatientsTabAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsTabAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsTabAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
