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
    this.offset +=20;
    this.contentService.getCharactersInfinity( this.offset )
    .subscribe( resp => {
      this.listCharacters.push(...resp.data.results);
    });

  }
  @HostListener('window:scroll')
  onWindowScroll():void {
    console.log("Se ejecuta1")
    console.log("Offsetheight", this.document.documentElement.offsetHeight)
    console.log("pageYoffset", window.pageYOffset)
    console.log("InnerHeight", window.innerHeight)
    if(this.document.documentElement.offsetHeight - window.pageYOffset == window.innerHeight){
      this.getCharactersScroll();
      console.log("Se ejecuta2")
    }

  }

}
