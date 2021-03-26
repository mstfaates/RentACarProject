import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44336/api/rentals/getrentaldetails';

  constructor(private HttpClient: HttpClient) {}

  getRentals(): Observable<RentalResponseModel> {
    return this.HttpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
