import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../config.json';
import { Post } from '../models/post.js';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  baseUrl: string = '/post';

  getTop3() {
    return this.http.get<Post[]>(`${config.server}${this.baseUrl}/top3`);
  }

  getById(id) {
    return this.http.get<Post>(`${config.server}${this.baseUrl}/${id}`);
  }

  private getArgHeaders(): HttpHeaders {
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }
}
