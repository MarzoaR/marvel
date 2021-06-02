import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Series } from '../../interfaces/series.interface';
import { ContentService } from '../../services/content-service.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})

export class SeriesListComponent implements OnInit {

  listSeries: Series[] = [];

  offset: number = 0;

  constructor(
                @Inject(DOCUMENT) private document: Document,
                private contentService: ContentService) { }

  ngOnInit(): void {

    this.getSeries();

  }

  getSeries(){
    
    this.contentService.getSeries()
        .subscribe( resp => {
          this.listSeries.push(...resp.data.results);
        });
  }
  

  getSeriesScroll(){
    this.offset +=20;
    this.contentService.getSeriesInfinity( this.offset )
    .subscribe( resp => {
      this.listSeries.push(...resp.data.results);
    });

  }
  @HostListener('window:scroll')
  onWindowScroll():void {

    if(this.document.documentElement.offsetHeight - window.pageYOffset == window.innerHeight){
      this.getSeriesScroll();
    }

  }

}
