import { Injectable } from '@angular/core';
import { CustomerResponseModel } from '../models/customerResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44336/api/customers/getall';

  constructor(private HttpClient: HttpClient) {}

  getCustomer(): Observable<CustomerResponseModel> {
    return this.HttpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}
