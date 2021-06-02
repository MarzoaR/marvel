import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content-service.service';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  lista!: Characters

  constructor(
                private activatedRoute: ActivatedRoute,
                private contentService: ContentService
              ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({ id }) => {
      // console.log('ID', id);
      this.contentService.getCharacter( id )
          .subscribe( resp => {
            // console.log('Personaje', resp);

            this.lista = resp.data.results[0] ;

            // console.log(this.lista)


          })
    })

  }

}
