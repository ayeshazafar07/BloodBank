import { Injectable } from '@angular/core';
import { dummyDonor } from '../donors-tab-admin/dummyDonor';

@Injectable({
  providedIn: 'root'
})
export class DummyDonorService {

  findall(): dummyDonor[] {
    return [
      {
        name: 'abc',
        email: 'abc@gmail.com',
        address: 'H3 P5 F10 Isbd',
        number: '03335417890',
        bloodType: 'A-'
      },
      {
        name: 'abc',
        email: 'abc@gmail.com',
        address: 'H3 P5 F10 Isbd',
        number: '03335417890',
        bloodType: 'A-'
      },
      {
        name: 'abc',
        email: 'abc@gmail.com',
        address: 'H3 P5 F10 Isbd',
        number: '03335417890',
        bloodType: 'A-'
      }
    ];
  }
  constructor() { }
}
