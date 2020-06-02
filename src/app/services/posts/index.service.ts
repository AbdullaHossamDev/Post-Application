import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  baseURL: String;

  constructor(
    private http: HttpClient
  ) {
    this.baseURL = "https://jsonplaceholder.typicode.com";
  }

  getAllPosts() {
    return this.http.get(`${this.baseURL}/posts`)
      .pipe(catchError(this.handleError));
  }

  getPostById(id: Number) {
    return this.http.get(`${this.baseURL}/posts/${id}`)
      .pipe(catchError(this.handleError));
  }

  getPostByUserId(userId: Number) {
    return this.http.get(`${this.baseURL}/posts?userId=${userId}`)
      .pipe(catchError(this.handleError));
  }

  addPost(postData: any) {
    return this.http.post(`${this.baseURL}/posts`, JSON.stringify(postData), { headers: { "Content-type": "application/json; charset=UTF-8" } })
      .pipe(catchError(this.handleError));
  }

  putPost(postData: any) {
    return this.http.put(`${this.baseURL}/posts`, JSON.stringify(postData), { headers: { "Content-type": "application/json; charset=UTF-8" } })
      .pipe(catchError(this.handleError));
  }

  patchPost(postData: any) {
    return this.http.patch(`${this.baseURL}/posts`, JSON.stringify(postData), { headers: { "Content-type": "application/json; charset=UTF-8" } })
      .pipe(catchError(this.handleError));
  }

  deletePost(id: Number) {
    this.http.delete(`${this.baseURL}/posts/${id}`);
  }

  handleError(error) {
    return throwError(error.message || "Server Error");
  }
}
