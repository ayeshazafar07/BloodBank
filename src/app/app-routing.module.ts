import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DonorsTabAdminComponent } from './donors-tab-admin/donors-tab-admin.component';
import { EditprofileDonorComponent } from './editprofile-donor/editprofile-donor.component';
import { HelpTabAdminComponent } from './help-tab-admin/help-tab-admin.component';
import { HomepageDonorComponent } from './homepage-donor/homepage-donor.component';
import { HomepagePatientComponent } from './homepage-patient/homepage-patient.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginDonorComponent } from './login-donor/login-donor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { PatientsTabAdminComponent } from './patients-tab-admin/patients-tab-admin.component';
import { RequestComponent } from './request/request.component';
import { SettingsTabAdminComponent } from './settings-tab-admin/settings-tab-admin.component';
import { SignupDonorComponent } from './signup-donor/signup-donor.component';
import { SignupPatientComponent } from './signup-patient/signup-patient.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login-admin', pathMatch:'full'
  },
  {
    path: 'login-admin', component: LoginAdminComponent  
  },
  {
    path: 'signup-donor', component: SignupDonorComponent 
  },
  {
    path: 'login-donor', component: LoginDonorComponent  
  },
  {
    path: 'dashboard-admin', component: DashboardAdminComponent
  },
  {
    path: 'donors-tab-admin', component: DonorsTabAdminComponent
  },
  {
    path: 'patients-tab-admin', component: PatientsTabAdminComponent
  },
  {
    path: 'settings-tab-admin', component: SettingsTabAdminComponent
  },
  {
    path: 'help-tab-admin', component: HelpTabAdminComponent
  },
  {
    path: 'editprofile-donor', component: EditprofileDonorComponent
  },
  {
    path: 'login-patient', component: LoginPatientComponent
  },
  {
    path: 'signup-patient', component: SignupPatientComponent
  },
  {
    path: 'homepage-donor', component: HomepageDonorComponent
  },
  {
    path: 'homepage-patient', component: HomepagePatientComponent
  },
  {
    path: 'request', component: RequestComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
