import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages: CarImage[];
  carId: number;
  car: Car[] = [];
  currentCar: Car;
  imageUrl: string = 'https://localhost:44336/';

  constructor(
    private carService: CarService,
    private carimageService: CarImageService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = params['carId'];
        this.getCarDetails(params['carId']);
        this.getCarImagesByCarId(params["carId"]);
      }
    });
  }

  getCarDetails(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.car = response.data;
      this.carImages = this.car[0].carImage;
    });
  }

  getCarImagesByCarId(carId:number){
    this.carimageService.getCarImagesByCarId(carId).subscribe(response =>{
      this.carImages = response.data;
    });
  }

  getCurrentImageClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }

  setCurrentCar(car: Car){
    this.currentCar = car;
  }

  getCurrentCarClass(car: Car) {
    if (car == this.currentCar) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
