import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';

import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { ComicDetailsComponent } from './pages/comic-details/comic-details.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { CreatorsListComponent } from './pages/creators-list/creators-list.component';
import { CreatorDetailsComponent } from './pages/creator-details/creator-details.component';
import { SerieDetailsComponent } from './pages/serie-details/serie-details.component';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { CharacterComponent } from './components/character/character.component';
import { ComicComponent } from './components/comic/comic.component';



@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailsComponent,
    ComicDetailsComponent,
    ComicsListComponent,
    CreatorsListComponent,
    CreatorDetailsComponent,
    SerieDetailsComponent,
    SeriesListComponent,
    CharacterComponent,
    ComicComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
