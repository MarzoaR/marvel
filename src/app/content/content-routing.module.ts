import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { ComicDetailsComponent } from './pages/comic-details/comic-details.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { CreatorDetailsComponent } from './pages/creator-details/creator-details.component';
import { CreatorsListComponent } from './pages/creators-list/creators-list.component';
import { SerieDetailsComponent } from './pages/serie-details/serie-details.component';
import { SeriesListComponent } from './pages/series-list/series-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'characters',
        component: CharactersListComponent
      },
      {
        path: 'character/:id',
        component: CharacterDetailsComponent
      },
      {
        path: 'comics',
        component: ComicsListComponent
      },
      {
        path: 'comic/:id',
        component: ComicDetailsComponent
      },
      {
        path: 'creators',
        component: CreatorsListComponent
      },
      {
        path: 'creator/:id',
        component: CreatorDetailsComponent
      },
      {
        path: 'series',
        component: SeriesListComponent
      },
      {
        path: 'serie/:id',
        component: SerieDetailsComponent
      },
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule { }
