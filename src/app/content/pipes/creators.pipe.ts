import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../interfaces/comics.interface';

@Pipe({
  name: 'creators'
})
export class CreatorsPipe implements PipeTransform {

  transform(value: Item[], role: string = ''): any {

    for(let element of value){
      if (element.role === role){
        return element.name;
      }
    }

  }
}
