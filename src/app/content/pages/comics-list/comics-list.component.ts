import { DOCUMENT } from '@angular/common';
import { Component,HostListener, Inject, OnInit } from '@angular/core';
import { Comics } from '../../interfaces/comics.interface';
import { ContentService } from '../../services/content-service.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})

export class ComicsListComponent implements OnInit {

  listComics: Comics[] = [];

  offset: number = 0;

  constructor(
                @Inject(DOCUMENT) private document: Document,
                private contentService: ContentService ) { }

  ngOnInit(): void {

    this.getComics();

  }

  getComics(){

    this.contentService.getComics()
        .subscribe( resp => {
          this.listComics.push(...resp.data.results);
        });
  }


  getComicsScroll(){
    this.offset +=20;
    this.contentService.getComicsInfinity( this.offset )
    .subscribe( resp => {
      this.listComics.push(...resp.data.results);
    });

  }
  @HostListener('window:scroll')
  onWindowScroll():void {

    if(this.document.documentElement.offsetHeight - window.pageYOffset == window.innerHeight){
      this.getComicsScroll();
    }

  }

}
