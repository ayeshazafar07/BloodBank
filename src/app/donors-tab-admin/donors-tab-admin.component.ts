import { Component, OnInit } from '@angular/core';
import { dummyDonor } from './dummyDonor';
import { DummyDonorService } from '../service/dummy-donor.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donors-tab-admin',
  templateUrl: './donors-tab-admin.component.html',
  styleUrls: ['./donors-tab-admin.component.css']
})
export class DonorsTabAdminComponent implements OnInit {

  add_new_donor!: FormGroup;

  donors: dummyDonor[] = [];
  dd: any;
  donorData!: FormGroup;
  constructor(private formBuilder:FormBuilder ,private donorService: DummyDonorService) { }

  ngOnInit(): void {

    this.add_new_donor = this.formBuilder.group({
      donorname:[''],
      donoremail: [''],
      donornumber: [''],
      donorblood: [''],
      donoraddress:['']
    })

    this.donorData = this.formBuilder.group({
      name: [''],
      email: [''],
      number: [''],
      bloodType: [''],
      address:['']
    })
//    this.generateReport()
  }

  generateReport() {

    this.donors = this.donorService.findall();
    
    console.log(this.donors)
    console.log("ndjsjnjkcnjsdnc");


    //this.donorData.controls['name'].setValue(this.donors[0].name);
    //this.donorData.controls['email'].setValue(this.donors[0].email);


    //this.dd = this.donorData;

//    this.dd[0].name = this.donors[0].name;
 //   this.dd[0].address = this.donors[0].address;
 //   this.dd[0].number = this.donors[0].number;
 //   this.dd[0].bloodType = this.donors[0].bloodType;
 //   this.dd[0].email = this.donors[0].email;

//    console.log(this.donors.values)
//    console.log("ndjsjnjkcnjsdnc");

    for (let i = 0; i < 3; i++) {
      this.dd[i].name = this.donors[i].name;
      this.dd[i].email = this.donors[i].email;
      this.dd[i].number = this.donors[i].number;
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
  
  deleteDonor() {

  }
}
