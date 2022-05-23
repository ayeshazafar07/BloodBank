import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-donor',
  templateUrl: './login-donor.component.html',
  styleUrls: ['./login-donor.component.css']
})
export class LoginDonorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  donorlogin() {
    this.router.navigate(['homepage-donor']);
  }
}
