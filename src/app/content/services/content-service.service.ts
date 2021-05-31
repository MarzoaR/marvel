import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comics, Price, SearchComicsResponse } from '../interfaces/comics.interface';
import { environment } from 'src/environments/environment';

// import * as crypto from 'crypto-js';
import {Md5} from 'ts-md5/dist/md5';
import { Comic } from '../interfaces/comic.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  private keyPublic: string = environment.apiKeyPublic;
  private keyPrivate: string = environment.apiKeyPrivate;

  urlBase: string = 'https://gateway.marvel.com:443/v1/public'

  private ts = new Date().getTime();
  // private hash = crypto.MD5(this.ts+this.keyPrivate+this.keyPublic).toString();

  get hash(){

    const hashCode = this.ts.toString()+this.keyPrivate+this.keyPublic;
    const md5 = new Md5();
    const hash = md5.appendStr(hashCode).end();

    return hash;
  }

  comics: Comic[] = []

  constructor( private http: HttpClient ) { }

  buscarComics(){

    this.http.get<SearchComicsResponse>(`${this.urlBase}/comics?apikey=${this.keyPublic}&hash=${this.hash}&ts=${this.ts.toString()}`)
        .subscribe(resp => {

          const comics: Comics[] = resp.data.results;
          const comics2 = resp["data"]["results"]
          const prices: Price[] = comics[19].prices
          // console.log(prices[0].price);
          // console.log('comics', comics);
          // console.log('comics2', comics2);
          // let b = "";

          comics.forEach( (obj: Comics) => {
            const comic: Comic = {};
            const searchCreator = (elements: any, value: string) => {
              for(let element of elements){
                if (element.role === value){
                  return element.name;
                }
              }
            }

            const validType = ( value: any ) => {
              if( typeof(value) === 'string'){
                return value;
              }else{
                return 'No Data';
              }
            }
            comic.title = obj.title;
            comic.price = obj.prices[0].price;
            comic.thumbnail = `${obj.thumbnail.path}.${obj.thumbnail.extension}`;
            // obj.creators.items.forEach(elemt => { if (elemt.role === "writer"){
            //   writer = elemt.name
            // } })
            comic.writer = validType(searchCreator(obj.creators.items, "writer"));
            // obj.creators.items.forEach(elemt => { if (elemt.role === "penciller (cover)"){
            //   authorCover = elemt.name
            // } })
            comic.authorCover = validType(searchCreator(obj.creators.items, "penciller (cover)"));
            this.comics.push(comic)
          });
          // console.log("Comics",this.comics);
        })
  }



}
