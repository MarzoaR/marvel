import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Comics } from '../../interfaces/comics.interface';
import { ContentService } from '../../services/content-service.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})

export class ComicsListComponent implements OnInit {

  spinner: boolean = false;

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
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    this.offset +=20;
    this.contentService.getComicsInfinity( this.offset )
    .subscribe( resp => {
      this.listComics.push(...resp.data.results);
      this.spinner = false;
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    });

  }
  @HostListener('window:scroll')
  onWindowScroll():void {

    let result: number = this.document.documentElement.offsetHeight - window.pageYOffset;

    if( Math.floor(result) <= window.innerHeight ){
      this.spinner = true;
      this.getComicsScroll();
    }

  }

}
