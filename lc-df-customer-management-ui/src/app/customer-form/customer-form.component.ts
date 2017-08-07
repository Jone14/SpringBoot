import { Component } from '@angular/core';

import { Customer } from '../customer';
@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {


  model = new Customer('123', 'Joseph', 'Panddian', 'Chennai', 'India', '600041', 'jonejsph@gmail.com', '9003252079', 'ACTIVE', 'GOLD');
  CustomerService
  getCustomers
  submitted = false;

  onSubmit() {
    this.submitted = true;

  }

  newCustomer() {
    this.model = new Customer('', '', '', '', '', '', '', '', '', '');
  }

}
