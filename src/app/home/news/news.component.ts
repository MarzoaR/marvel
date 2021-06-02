import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../content/services/content-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor( private serviceServices: ContentService) { }

  ngOnInit(): void {

    // console.log(this.serviceServices.buscarComics());
  }

}
