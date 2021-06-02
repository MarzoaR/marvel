import { Pipe, PipeTransform } from '@angular/core';
import { Thumbnail } from '../interfaces/characters.interface';

@Pipe({
  name: 'cancatImage'
})
export class ConcatThumbnailPipe implements PipeTransform {

  transform( value: Thumbnail): string {

    return `${value.path}.${value.extension}`;
  }

}
