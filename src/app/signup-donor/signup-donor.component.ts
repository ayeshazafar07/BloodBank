import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-donor',
  templateUrl: './signup-donor.component.html',
  styleUrls: ['./signup-donor.component.css']
})
export class SignupDonorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signupdonor() {

    alert("signed up")
  }
}
