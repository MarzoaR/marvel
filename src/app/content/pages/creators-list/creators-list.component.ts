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
    this.offset +=20;
    this.contentService.getCreatorsInfinity( this.offset )
        .subscribe( resp => {
          this.listCreators.push(...resp.data.results);
        });

  }
  @HostListener('window:scroll')
  onWindowScroll():void {

    if(this.document.documentElement.offsetHeight - window.pageYOffset == window.innerHeight){
      this.getCreatorsScroll();
    }

  }

}
