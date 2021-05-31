import { Component, OnInit } from '@angular/core';
import { Comic } from '../../interfaces/comic.interface';
import { ContentServiceService } from '../../services/content-service.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  listComics: Comic[] = [];

  constructor( private contentService: ContentServiceService ) { }

  ngOnInit(): void {

    this.contentService.buscarComics();

    this.listComics = this.contentService.comics;

    // console.log('Componente comics',this.listComics)
  }




}
