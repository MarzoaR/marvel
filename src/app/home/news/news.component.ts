import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from '../../content/services/content-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor( private serviceServices: ContentServiceService) { }

  ngOnInit(): void {

    // console.log(this.serviceServices.buscarComics());
  }

}
