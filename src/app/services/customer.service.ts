import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44336/api/';

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+"customers/getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerById(customerId:number):Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+"customers/getbyid?id="+customerId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerByEmail(email:string):Observable<SingleResponseModel<Customer>>{
    let newPath = this.apiUrl + "customers/getcustomerbyemail?email="+email;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
}
