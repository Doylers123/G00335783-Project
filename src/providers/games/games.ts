import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class GamesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GamesProvider Provider');
  }
  GetGameData(): Observable<any> {
    return this.http.get('https://jsonblob.com/api/jsonblob/bc781935-4e1f-11e8-ad5f-933edc7eccfd');
  }
}
