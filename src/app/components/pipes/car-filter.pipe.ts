import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';

@Pipe({
  name: 'carFilter',
})
export class CarFilterPipe implements PipeTransform {
  transform(
    value: CarDetail[],
    filterText: string,
    color: string,
    brand: string
  ): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    color = color ? color.toLocaleLowerCase() : '';
    brand = brand ? brand.toLocaleLowerCase() : '';
    return filterText || color || brand
      ? value.filter(
          (c: CarDetail) =>
            c.model?.toLocaleLowerCase().indexOf(filterText) !== -1 &&
            c.colorName?.toLocaleLowerCase().indexOf(color) !== -1 &&
            c.brandName?.toLocaleLowerCase().indexOf(brand) !== -1
        )
      : value;
  }
}
