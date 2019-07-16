import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../config.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl: string = '/external/register';

  post(info) {
    console.log(config.server + this.baseUrl);
    return this.http.post(config.server + this.baseUrl, info, { headers: this.getArgHeaders() });
  }

  private getArgHeaders(): HttpHeaders {
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }
}
