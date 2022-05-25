import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { patientsModel } from '../patients-tab-admin/patientModel';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  patient : patientsModel[]=[];
  constructor(private router: Router,private apiService:ApiService) {this.readpatient(); }

  ngOnInit(): void {
  }
  readpatient() {
    this.apiService.getPatients().subscribe(
      (res) => {
        this.patient = res;
        console.log(this.patient);
      }
    )
  }

  patientlogin(event: any) {
    
    let email = document.getElementById('email') as HTMLInputElement;
    let password = document.getElementById('password') as HTMLInputElement;
    console.log(email.value);
    console.log(password.value);
    let flag = false;
    for (let i = 0; i < this.patient.length; i++) {
      if (email.value == this.patient[i].email && password.value == this.patient[i].password) {
        this.router.navigate(['homepage-patient']);
        flag = true;
        break;
      }
    }
    if (flag == false) {
      alert("Invalid Credentials");
    }

  }

}
