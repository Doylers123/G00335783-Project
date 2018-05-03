import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class MoviesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }
    GetMovieData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/fdb229e7-4ee1-11e8-8766-2d96aa81c4fa');
}

}
