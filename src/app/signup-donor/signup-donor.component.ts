import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-signup-donor',
  templateUrl: './signup-donor.component.html',
  styleUrls: ['./signup-donor.component.css']
})
export class SignupDonorComponent implements OnInit {

  add_new_donor!: FormGroup;
  submitted = false;
  

  constructor(private fb:FormBuilder,
              private apiService:ApiService,
              private router:Router,
              private ngZone:NgZone) {
                this.mainForm();
              
               }
  mainForm() {
    this.add_new_donor = this.fb.group({
      name:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      phone: ['',Validators.required],
      bloodType: ['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      amount:['',Validators.required]
    })
  }

  onSubmit() {
    console.log("submitted",this.add_new_donor.value)
    this.submitted = true;
    if (this.add_new_donor.invalid) {
      console.log("invalid")
      return;
    }
    this.apiService.addDonor(this.add_new_donor.value).subscribe(
      (res) => {
        console.log(res);
        window.alert("signed up")
        this.ngZone.run(() => this.router.navigateByUrl('/login-donor'));
      }
    )

  }

  ngOnInit(): void {
  }

  signupdonor() {

    alert("signed up")
  }
}
