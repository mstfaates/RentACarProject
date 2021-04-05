import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private carDetailService: CarDetailService, private activatedRoute:ActivatedRoute) { }
  carDetails:CarDetail[]=[];
  carId: number;
  imageUrl:string="https://localhost:44335/"

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]){
        this.carId=params["carId"]
        this.getCarDetails(params["carId"])
      }
    })
  }

  getCarDetails(carId:number){
    
  }  
}