import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44336/api/';

  constructor(private HttpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/getall";
    return this.HttpClient.get<ListResponseModel<Rental>>(newPath);
  }

  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl+"rentals/add";
    return this.HttpClient.post<ResponseModel>(newPath,rental);
  }
  
  getRentalById(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"rentals/getbycarid?carId="+carId;
    return this.HttpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
