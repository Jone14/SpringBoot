import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from '../customer';

import * as AppConst from '../app.constants';

@Injectable()
export class CustomerService {


  private headers = new Headers({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});




  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]> {
    return this.http.get(AppConst.getAllCustomerUrl)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }


  getCustomer(id: string): Promise<Customer> {
    alert(id);
    const url = `${AppConst.getCustomersByIdUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${AppConst.deleteCustomerByIdUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Customer> {
    return this.http
      .post(AppConst.createCustomerUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Customer)
      .catch(this.handleError);
  }

  update(customer: Customer): Promise<Customer> {
    const url = `${AppConst.updateCustomerByIdUrl}/${customer.customerId}`;
    return this.http
      .put(url, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(() => customer)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
