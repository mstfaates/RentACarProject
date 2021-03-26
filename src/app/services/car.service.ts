import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44336/api/cars/getcardetails';

  constructor(private HttpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    return this.HttpClient.get<CarResponseModel>(this.apiUrl);
  }
}
