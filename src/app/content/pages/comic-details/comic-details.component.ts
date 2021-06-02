import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comics } from '../../interfaces/comics.interface';
import { ContentService } from '../../services/content-service.service';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  comic!: Comics;

  constructor(
              private activatedRoute: ActivatedRoute,
              private contentService: ContentService
              ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({ id }) => {

      this.contentService.getComic( id )
          .subscribe( resp => {
            this.comic = resp.data.results[0];

            console.log(resp.data.results)
          })
    })

  }

}
