import { Component, Input, OnInit } from '@angular/core';
import { Comics } from '../../interfaces/comics.interface';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() listComics: Comics[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
