import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'carFilterPipe',
})
export class CarFilterPipe implements PipeTransform {
  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (c: Car) =>
            c.model.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
