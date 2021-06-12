import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../Interfaces/news.interface';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  @Input() news: News[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
