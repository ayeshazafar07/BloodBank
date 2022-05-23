import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTabAdminComponent } from './settings-tab-admin.component';

describe('SettingsTabAdminComponent', () => {
  let component: SettingsTabAdminComponent;
  let fixture: ComponentFixture<SettingsTabAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTabAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTabAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
