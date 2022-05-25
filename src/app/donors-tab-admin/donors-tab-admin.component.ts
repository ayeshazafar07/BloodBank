import { Component, NgZone, OnInit } from '@angular/core';
import { dummyDonor } from './dummyDonor';
import { DummyDonorService } from '../service/dummy-donor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-donors-tab-admin',
  templateUrl: './donors-tab-admin.component.html',
  styleUrls: ['./donors-tab-admin.component.css']
})
export class DonorsTabAdminComponent implements OnInit {

  add_new_donor!: FormGroup;
  submitted = false;
  donors: dummyDonor[] = [];
  dd: any;
  donorData!: FormGroup;
  constructor(private formBuilder:FormBuilder ,private donorService: DummyDonorService,
              private router: Router,private apiService:ApiService,private ngZone:NgZone) {
                this.mainForm();
                this.readDonor();
               }

  ngOnInit(): void {
    this.donorData = this.formBuilder.group({
      name: [''],
      email: [''],
      number: [''],
      bloodType: [''],
      address:['']
    })
//    this.generateReport()
  }
  mainForm() {
    this.add_new_donor = this.formBuilder.group({
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
  readDonor() {
    this.apiService.getDonors().subscribe(
      (res) => {
        console.log(res);
        this.donors = res;
      }
    )
  }

  generateReport() {

    this.donors = this.donorService.findall();
    console.log(this.donors)
    console.log("ndjsjnjkcnjsdnc");


    for (let i = 0; i < 3; i++) {
      this.dd[i].name = this.donors[i].name;
      this.dd[i].email = this.donors[i].email;
      this.dd[i].number = this.donors[i].phone;
      this.dd[i].bloodType = this.donors[i].bloodType;
      this.dd[i].address = this.donors[i].address;

      console.log("ndjsjnjkcnjsdnc"+i);
      console.log(this.donors[i])
    }

    console.log("endendendend")
    }

  addDonor() {
    console.log(this.add_new_donor)
    this.add_new_donor.reset();
    alert("New donor added")
    }

  
  deleteDonor(donor:any,index:number) {
    console.log(donor)
    this.apiService.deleteDonor(donor.id).subscribe(
      (res) => {
        console.log(res);
        this.donors.splice(index,1);
      }
    )

  }
  get myForm() {
    return this.add_new_donor.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log("submitted")
    if (this.add_new_donor.invalid) {
      return;
    }
    this.apiService.addDonor(this.add_new_donor.value).subscribe(
      (res) => {
        console.log(res);
        this.ngZone.run(() => this.router.navigateByUrl('/donors-tab-admin'));
      },
      (error) => {
        console.log(error);
      });
  }
}
