import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './home/news/news.component';

const routes: Routes =[
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then( m => m.ContentModule )
  }

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
