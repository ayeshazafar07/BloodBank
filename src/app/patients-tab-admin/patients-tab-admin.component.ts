import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { patientsModel } from './patientModel';

@Component({
  selector: 'app-patients-tab-admin',
  templateUrl: './patients-tab-admin.component.html',
  styleUrls: ['./patients-tab-admin.component.css']
})
export class PatientsTabAdminComponent implements OnInit {

  add_new_patient!: FormGroup;
  submitted = false;
  patient: patientsModel[] =[]
  
  constructor(private fb:FormBuilder,
              private router:Router,
              private apiService: ApiService,
              private ngZone:NgZone) { 
                this.mainForm();
                this.readPatient();
              }

  ngOnInit(): void {
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
  readPatient() {
    this.apiService.getPatients().subscribe(
      (res) => {
        console.log(res);
        this.patient = res;
      }
    )
  }
  onSubmit() {
    this.submitted = true;
    if (this.add_new_patient.invalid) {
      return;
    }
    this.apiService.addPatient(this.add_new_patient.value).subscribe(
      (res) => {
        console.log(res);
        this.ngZone.run(() => this.router.navigateByUrl('/patients-tab-admin'));
      }
    )
  }

  deletePatient(patient:any, index:number) {
    this.apiService.deletePatient(patient.id).subscribe(
      (res) => {
        console.log(res);
        this.patient.splice(index, 1);
      }
    )
    
  }

}
