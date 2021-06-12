import { Component, OnInit } from '@angular/core';
import { News } from '../Interfaces/news.interface';
import { HomeService } from '../services/home-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [];

  constructor( private serviceServices: HomeService ) { }

  ngOnInit(): void {

    this.getNews();

  }

  getNews(){

    this.serviceServices.getNews()
    .subscribe( resp => {
      this.news = resp;
      console.log(this.news);
    })
  }

}
