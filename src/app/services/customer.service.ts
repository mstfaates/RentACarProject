import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44336/api/customers/getcustomerdetail';

  constructor(private HttpClient: HttpClient) {}

  getCustomer(): Observable<ListResponseModel<Customer>> {
    return this.HttpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
