import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() listCharacters: Characters[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
