import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.css']
})
export class SignupPatientComponent implements OnInit {

  add_new_patient!: FormGroup;
  submitted = false;
  

  constructor(private fb:FormBuilder,
              private apiService:ApiService,
              private router:Router,
              private ngZone:NgZone) {
                this.mainForm();
              
               }
  mainForm() {
    this.add_new_patient = this.fb.group({
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
    console.log("submitted",this.add_new_patient.value)
    this.submitted = true;
    if (this.add_new_patient.invalid) {
      console.log("invalid")
      return;
    }
    this.apiService.addPatient(this.add_new_patient.value).subscribe(
      (res: any) => {
        console.log(res);
        window.alert("signed up")
        this.ngZone.run(() => this.router.navigateByUrl('/login-patient'));
      }
    )

  }

  ngOnInit(): void {
  }


  signuppatient() {

  }
}
