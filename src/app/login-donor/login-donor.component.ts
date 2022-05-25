import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { dummyDonor } from '../donors-tab-admin/dummyDonor';

@Component({
  selector: 'app-login-donor',
  templateUrl: './login-donor.component.html',
  styleUrls: ['./login-donor.component.css']
})
export class LoginDonorComponent implements OnInit {

  donor : dummyDonor[]=[];
  constructor(private router: Router,private apiService:ApiService) {this.readDonor(); }

  ngOnInit(): void {
  }
  readDonor() {
    this.apiService.getDonors().subscribe(
      (res) => {
        this.donor = res;
        console.log(this.donor);
      }
    )
  }

  donorlogin(event: any) {
    
    let email = document.getElementById('email') as HTMLInputElement;
    let password = document.getElementById('password') as HTMLInputElement;
    console.log(email.value);
    console.log(password.value);
    let flag = false;
    for (let i = 0; i < this.donor.length; i++) {
      if (email.value == this.donor[i].email && password.value == this.donor[i].password) {
        this.router.navigate(['homepage-donor']);
        flag = true;
        break;
      }
    }
    if (flag == false) {
      alert("Invalid Credentials");
    }

  }
}
