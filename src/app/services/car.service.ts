import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44336/api/';

  constructor(private HttpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getallbybrandidwithdetails?id=' + brandId;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?id=' + colorId;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(carId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getcardetails?id="+carId;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getcarsbybrandandcolorid?brandId="+brandId+"&colorId="+colorId;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl+"cars/add";
    return this.HttpClient.post<ResponseModel>(newPath,car);
  }

  delete(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl+"cars/delete";
    return this.HttpClient.post<ResponseModel>(newPath,car);
  }

  update(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl+"cars/update";
    return this.HttpClient.post<ResponseModel>(newPath,car);
  }

}
