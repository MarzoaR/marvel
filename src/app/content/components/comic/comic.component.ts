import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../interfaces/comic.interface';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() listComics: Comic[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
