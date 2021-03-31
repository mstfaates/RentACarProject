import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44336/api/brands/getall';

  constructor(private HttpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.HttpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
