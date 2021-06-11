import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';
import { ContentService } from '../../services/content-service.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})

export class CharactersListComponent implements OnInit {

  spinner: boolean = false;

  listCharacters: Characters[] = [];

  offset: number = 0;

  constructor(
                @Inject(DOCUMENT) private document: Document,
                private contentService: ContentService) { }

  ngOnInit(): void {

    this.getCharacters();

  }

  getCharacters(){

    this.contentService.getCharacters()
        .subscribe( resp => {
          this.listCharacters.push(...resp.data.results);
        });
  }


  getCharactersScroll(){
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    this.offset +=20;
    this.contentService.getCharactersInfinity( this.offset )
    .subscribe( resp => {
      this.listCharacters.push(...resp.data.results);
      this.spinner = false;
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    });

  }
  @HostListener('window:scroll')
  onWindowScroll():void {

    // console.log('documentElement.offsetHeight', this.document.documentElement.offsetHeight);
    // console.log('pageYOffset', window.pageYOffset);
    // console.log('innerHeight', window.innerHeight);

    let result: number = this.document.documentElement.offsetHeight - window.pageYOffset;

    if( Math.floor(result) <= window.innerHeight ){
      this.spinner = true;
      this.getCharactersScroll();
      // console.log('Se ejecuta el scroll');
    }

  }

}
