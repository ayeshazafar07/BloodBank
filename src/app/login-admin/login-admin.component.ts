import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  adminLogin !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    //    this.adminLogin = this.formBuilder.group({
    //      adminemail: [''],
    //      adminpassword: ['']
    //    })

    this.adminLogin = new FormGroup({
      adminemail: new FormControl(),
      adminpassword: new FormControl()
    });

    this.adminLogin = this.formBuilder.group({
      adminemail: [''],
      adminpassword: ['']
    })
  }

  adminlogin(): void {

    console.log('scjasjckskcjkjcksdjjchjsdhcjdshchsdj')
    console.log(this.adminLogin.value)
    console.log('dddoooonnnee')


    let flag: number = 0;
    if (this.adminLogin.value.adminemail === "ayesha@gmail.com" && this.adminLogin.value.adminpassword === "12345" || this.adminLogin.value.adminemail === "sardar@gmail.com" && this.adminLogin.value.adminpassword === "67890") {
      flag = 1;
    }
    if (flag == 1) {
      alert("Login Successful!");
      this.adminLogin.reset();
      this.router.navigate(['dashboard-admin']);
    } else {
      alert("Login failed! Try again.")
      this.adminLogin.reset();
    }
    //    this.router.navigate(['dashboard-admin']);
  }

}
