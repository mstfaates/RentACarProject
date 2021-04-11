import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm: FormGroup;
  brand: Brand;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getByBrandId(params['brandId']);
    });
  }

  getByBrandId(brandId: number) {
    this.brandService.getByBrandId(brandId).subscribe((response) => {
      this.brand = response.data[0];
      this.createBrandUpdateForm();
    });
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brand.brandId, Validators.required],
      brandName: [this.brand.name, Validators.required],
    });
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);

      this.brandService.update(brandModel).subscribe(
        (response) => {
          this.toastrService.success('Brand Updated', 'Success');
        },
        (responseError) => {
          console.log(responseError);
          if (responseError.error.errors.length > 0) {
            for (let i = 0; i < responseError.error.errors.length; i++) {
              this.toastrService.error(
                responseError.error.errors[i].ErrorMessage,
                'Verification Error'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('There are missing fields', 'Warning');
    }
  }
}
