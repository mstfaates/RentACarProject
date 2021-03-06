import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44336/api/';
  constructor(private HttpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getall"
    return this.HttpClient.get<ListResponseModel<Color>>(newPath);
  }

  getByColorId(colorId:number):Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getbycolorid?id="+colorId;
    return this.HttpClient.get<ListResponseModel<Color>>(newPath);
  }

  add(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl+ "colors/add";
    return this.HttpClient.post<ResponseModel>(newPath,color);
  }

  update(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl+ "colors/update";
    return this.HttpClient.post<ResponseModel>(newPath,color);
  }

  delete(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl+ "colors/delete";
    return this.HttpClient.post<ResponseModel>(newPath,color);
  }
}
