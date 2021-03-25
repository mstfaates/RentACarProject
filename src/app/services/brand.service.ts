import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44336/api/brands/getall';

  constructor(private HttpClient: HttpClient) {}

  getBrands(): Observable<BrandResponseModel> {
    return this.HttpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
