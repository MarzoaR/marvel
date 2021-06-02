import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Creators } from '../../interfaces/creators.interface';
import { ContentService } from '../../services/content-service.service';

@Component({
  selector: 'app-creator-details',
  templateUrl: './creator-details.component.html',
  styleUrls: ['./creator-details.component.css']
})
export class CreatorDetailsComponent implements OnInit {

  creator!: Creators;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({ id }) => {

    this.contentService.getCreator( id )
        .subscribe( resp => {
          this.creator = resp.data.results[0];

          console.log(resp.data.results)
        })
    });

  }

}
