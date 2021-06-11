import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../Interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  urlNews: string = 'https://marvel-f1ce9-default-rtdb.firebaseio.com/news.json';

  constructor( private http: HttpClient ) { }

  getNews(): Observable<News>{

    return this.http.get<News>( this.urlNews );
  }
}
