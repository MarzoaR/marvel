import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Creators } from '../../interfaces/creators.interface';
import { ContentService } from '../../services/content-service.service';

@Component({
  selector: 'app-creators-list',
  templateUrl: './creators-list.component.html',
  styleUrls: ['./creators-list.component.css']
})

export class CreatorsListComponent implements OnInit {

  spinner: boolean = false;

  listCreators: Creators[] = [];

  offset: number = 0;

  constructor(
                @Inject(DOCUMENT) private document: Document,
                private contentService: ContentService ) { }

  ngOnInit(): void {

    this.getCreators();

  }

  getCreators(){

    this.contentService.getCreators()
        .subscribe( resp => {
          this.listCreators.push(...resp.data.results);
        });
  }


  getCreatorsScroll(){
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    this.offset +=20;
    this.contentService.getCreatorsInfinity( this.offset )
        .subscribe( resp => {
          this.listCreators.push(...resp.data.results);
          this.spinner = false;
          document.getElementsByTagName("html")[0].style.overflow = "auto";
        });

  }
  @HostListener('window:scroll')
  onWindowScroll():void {

    let result: number = this.document.documentElement.offsetHeight - window.pageYOffset;

    if( Math.floor(result) <= window.innerHeight ){
      this.spinner = true;
      this.getCreatorsScroll();
    }

  }

}
