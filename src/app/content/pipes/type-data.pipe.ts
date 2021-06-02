import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class TypeDataPipe implements PipeTransform {

  transform(value: any): string {

    if( typeof(value) === 'string'){
      return value;
    }else{
      return 'No Data';
    }
  }

}
