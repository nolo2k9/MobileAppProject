import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
//class where api provider is implemented
export class ForcastProvider {
  //API key
  apiId = 'ab163ff033f58d1d35047fd169af691e'
  //base url
  baseId = 'http://api.openweathermap.org/data/2.5/'

  constructor(private http: HttpClient) {


  }
  // returns the base url and the 'weather' api. the api id and the city (as selected by the user)
  getWeather(city: string): Observable<any> {

    console.log('bonjour');
    let url = this.baseId + 'weather';
    url += '?appId=' + this.apiId;
    url += '&q=' + city;
    return this.http.get(url);

  }






}