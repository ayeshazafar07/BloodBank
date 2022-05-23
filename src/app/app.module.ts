import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DonorsTabAdminComponent } from './donors-tab-admin/donors-tab-admin.component';
import { PatientsTabAdminComponent } from './patients-tab-admin/patients-tab-admin.component';
import { SettingsTabAdminComponent } from './settings-tab-admin/settings-tab-admin.component';
import { HelpTabAdminComponent } from './help-tab-admin/help-tab-admin.component';
import { DummyDonorService } from './service/dummy-donor.service';
import { LoginDonorComponent } from './login-donor/login-donor.component';
import { SignupDonorComponent } from './signup-donor/signup-donor.component';
import { EditprofileDonorComponent } from './editprofile-donor/editprofile-donor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { HomepageDonorComponent } from './homepage-donor/homepage-donor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    LoginAdminComponent,
    DonorsTabAdminComponent,
    PatientsTabAdminComponent,
    SettingsTabAdminComponent,
    HelpTabAdminComponent,
    LoginDonorComponent,
    SignupDonorComponent,
    EditprofileDonorComponent,
    LoginPatientComponent,
    HomepageDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [DummyDonorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
