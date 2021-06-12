import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ShowNewsComponent } from './components/show-news/show-news.component';


@NgModule({
  declarations: [
    NewsComponent,
    ShowNewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
