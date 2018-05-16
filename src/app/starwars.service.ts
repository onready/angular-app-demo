import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private static URL_CHARACTERS = 'https://swapi.co/api/people/';

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<any> {
    return this.httpClient.get<any>(StarwarsService.URL_CHARACTERS);
  }

}
