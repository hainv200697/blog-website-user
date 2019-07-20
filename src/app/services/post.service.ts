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

  getPost(page) {
    return this.http.get<Post[]>(`${config.server}${this.baseUrl}/approve?page=${page}&size=5`);
  }

  getById(id) {
    return this.http.get<Post>(`${config.server}${this.baseUrl}/${id}`);
  }

  post(data) {
    return this.http.post<any>(`${config.server}${this.baseUrl}/create`, data);
    
  }

  getByMe(email, page) {
    return this.http.get<Post[]>(`${config.server}${this.baseUrl}/me?email=${email}&page=${page}&size=5`);
  }

  deletePost(id, email) {
    return this.http.get(`${config.server}${this.baseUrl}/delete/${id}?email=${email}`)
  }

  private getArgHeaders(): HttpHeaders {
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }
}
