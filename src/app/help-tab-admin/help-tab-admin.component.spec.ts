import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTabAdminComponent } from './help-tab-admin.component';

describe('HelpTabAdminComponent', () => {
  let component: HelpTabAdminComponent;
  let fixture: ComponentFixture<HelpTabAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpTabAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpTabAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
