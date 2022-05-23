import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  patientlogin() {
    this.router.navigate(['dashboard-admin']);
  }

}
