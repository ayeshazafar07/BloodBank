import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsTabAdminComponent } from './donors-tab-admin.component';

describe('DonorsTabAdminComponent', () => {
  let component: DonorsTabAdminComponent;
  let fixture: ComponentFixture<DonorsTabAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorsTabAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsTabAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
