import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  colors: Color[];
  brands: Brand[];
  dataLoaded = false;
  currentCar: Car;
  currentBrand: number;
  currentColor: number;
  filterText = '';
  imageUrl = 'https://localhost:44336/Images/';
  defaultImage = 'default.jpeg';

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsByFilter(params['brandId'], params['colorId']);
        console.log('if');
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['carId']) {
        this.getCarDetails(params['carId']);
      } else {
        this.getCars();
      }
    });
    this.getColors();
    this.getBrands();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetails(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByFilter(brandId: number, colorId: number) {
    this.carService
      .getCarsByBrandAndColorId(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
        this.dataLoaded = true;
        if (this.cars.length == 0) {
          this.toastrService.info(
            'Arama sonucunuza ait araç bulunamamaktadır.',
            'Arama sonucu'
          );
        }
      });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  IsCurrentBrandNull() {
    if (this.currentBrand) {
      return true;
    } else {
      return false;
    }
  }

  IsCurrentColorNull() {
    if (this.currentColor) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentBrand(brand: Brand) {
    if (this.currentBrand == brand.brandId) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentColor(color: Color) {
    if (color.colorId == this.currentColor) {
      return true;
    } else {
      return false;
    }
  }

  getRouterLink() {
    if (this.currentBrand && this.currentColor) {
      return (
        '/cars/filter/brand/' +
        this.currentBrand +
        '/color/' +
        this.currentColor
      );
    
    } else if (this.currentBrand) {
      return '/cars/filter/brand/' + this.currentBrand;
    } else if (this.currentColor) {
      return '/cars/filter/color/' + this.currentColor;
    } else {
      return '/cars';
    }
  }
}
