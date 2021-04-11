import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  arDeleteForm:FormGroup;

  cars:Car[];
  car:Car;
  dataLoaded = false;


  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,
    private carService:CarService) { }

  ngOnInit(): void {
    this.getCarList();
  }

  getCarList(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  
  delete(car:Car) {
    this.carService.delete(car).subscribe(response => {
      this.toastrService.success('Car is Deleted', 'Success')
    }, responseError => {
      if (responseError.error.ValidationErrors.length > 0) {
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, 'Verification Error');
        }
      }
    }
    )
  }
}
