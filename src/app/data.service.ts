import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }


  getPosts(): Observable<any> {
    const url: string = "https://hn.algolia.com/api/v1/search_by_date?tags=story";
    return this.httpClient.get(url).pipe(map(data => data['hits']));
  }
}
