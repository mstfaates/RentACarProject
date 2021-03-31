import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44336/api/cars/getcardetails';

  constructor(private HttpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    return this.HttpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
