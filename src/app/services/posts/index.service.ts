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
      .pipe(catchError(this.handleError)).subscribe((data:any) => {
        window.alert('Your post added successfully');
      })
  }

  putPost(postData: any) {
    return this.http.put(`${this.baseURL}/posts/${postData.id}`, JSON.stringify(postData), { headers: { "Content-type": "application/json; charset=UTF-8" } })
      .pipe(catchError(this.handleError)).subscribe((data:any) => {
        window.alert('Your post updated successfully');
      })
  }

  patchPost(postData: any) {
    return this.http.patch(`${this.baseURL}/posts/${postData.id}`, JSON.stringify(postData), { headers: { "Content-type": "application/json; charset=UTF-8" } })
      .pipe(catchError(this.handleError)).subscribe((data:any) => {
        window.alert('Your post updated successfully');
      })
  }

  deletePost(id: Number) {
    this.http.delete(`${this.baseURL}/posts/${id}`).subscribe((data:any) => {
      window.alert('Your post deleted successfully');
    })
  }

  handleError(error) {
    return throwError(error.message || "Server Error");
  }
}
