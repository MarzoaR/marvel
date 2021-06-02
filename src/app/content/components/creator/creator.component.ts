import { Component, Input, OnInit } from '@angular/core';
import { Creators } from '../../interfaces/creators.interface';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  @Input() listCreators: Creators[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
