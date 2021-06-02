import { Pipe, PipeTransform } from '@angular/core';
import { Price } from '../interfaces/comics.interface';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: Price[]): number {
    return value[0].price;
  }

}
