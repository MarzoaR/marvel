import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


import {Md5} from 'ts-md5/dist/md5';
import { SearchSeriesResponse } from '../interfaces/series.interface';
import { SearchComicsResponse } from '../interfaces/comics.interface';
import { SearchCharactersResponse } from '../interfaces/characters.interface';
import { SearchCreatorsResponse } from '../interfaces/creators.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private keyPublic: string = environment.apiKeyPublic;
  private keyPrivate: string = environment.apiKeyPrivate;

  urlBase: string = 'https://gateway.marvel.com:443/v1/public'

  ts = new Date().getTime();

  get hash(){
    const hashCode = this.ts.toString()+this.keyPrivate+this.keyPublic;
    const md5 = new Md5();
    const hash = md5.appendStr(hashCode).end();
    return hash;
  }

  params = new HttpParams()
          .set('apikey', this.keyPublic)
          .set('hash', this.hash.toString())
          .set('ts', this.ts.toString())


  constructor( private http: HttpClient ) { }

  getComics():Observable<SearchComicsResponse>{
    const url: string = `${this.urlBase}/comics`;
    return this.http.get<SearchComicsResponse>( url, { params: this.params } );
  }
  getComic( id: number ):Observable<SearchComicsResponse> {
    const url: string = `${this.urlBase}/comics/${id}`;
    return this.http.get<SearchComicsResponse>( url, {params: this.params} );
  }
  getComicsInfinity( offset: number):Observable<SearchComicsResponse> {
    const url: string = `${this.urlBase}/comics`;
    return this.http.get<SearchComicsResponse>( url, {params: this.params.set('offset', offset)} );
  }



  getCharacters():Observable<SearchCharactersResponse> {
    const url: string = `${this.urlBase}/characters`;
    return this.http.get<SearchCharactersResponse>( url, {params: this.params} );
  }
  getCharacter( id: number ):Observable<SearchCharactersResponse> {
    const url: string = `${this.urlBase}/characters/${id}`;
    return this.http.get<SearchCharactersResponse>( url, {params: this.params} );
  }
  getCharactersInfinity( offset: number):Observable<SearchCharactersResponse> {
    const url: string = `${this.urlBase}/characters`;
    return this.http.get<SearchCharactersResponse>( url, {params: this.params.set('offset', offset)} );
  }



  getCreators():Observable<SearchCreatorsResponse> {
    const url: string = `${this.urlBase}/creators`;
    return this.http.get<SearchCreatorsResponse>( url, {params: this.params} );
  }
  getCreator( id: number ):Observable<SearchCreatorsResponse> {
    const url: string = `${this.urlBase}/creators/${id}`;
    return this.http.get<SearchCreatorsResponse>( url, {params: this.params} );
  }
  getCreatorsInfinity( offset: number):Observable<SearchCreatorsResponse> {
    const url: string = `${this.urlBase}/creators`;
    return this.http.get<SearchCreatorsResponse>( url, {params: this.params.set('offset', offset)} );
  }



  getSeries():Observable<SearchSeriesResponse> {
    const url: string = `${this.urlBase}/series`;
    return this.http.get<SearchSeriesResponse>( url, {params: this.params} );
  }
  getSerie( id: number ):Observable<SearchSeriesResponse> {
    const url: string = `${this.urlBase}/series/${id}`;
    return this.http.get<SearchSeriesResponse>( url, {params: this.params} );
  }
  getSeriesInfinity( offset: number):Observable<SearchSeriesResponse> {
    const url: string = `${this.urlBase}/series`;
    return this.http.get<SearchSeriesResponse>( url, {params: this.params.set('offset', offset)} );
  }


}
