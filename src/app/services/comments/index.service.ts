import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getComments(postId: Number) {
    return this.http.get(`${this.baseURL}/posts/${postId}/comments`)
      .pipe(catchError(this.handleError));
  }

  getAllComments() {
    return this.http.get(`${this.baseURL}/comments`)
      .pipe(catchError(this.handleError));
  }

  getCommentById(id: Number) {
    return this.http.get(`${this.baseURL}/comments/${id}`)
      .pipe(catchError(this.handleError));
  }

  addComment(commentData: any) {
    return this.http.post(`${this.baseURL}/comments`, JSON.stringify(commentData), { headers: { "Content-type": "application/json; charset=UTF-8" } })
      .pipe(catchError(this.handleError)).subscribe((data:any) => {
        window.alert('Your comment added successfully');
      })
  }

  putComment(commentData: any) {
    return this.http.put(`${this.baseURL}/comments/${commentData.id}`, JSON.stringify(commentData), { headers: { "Content-type": "application/json; charset=UTF-8" } })
      .pipe(catchError(this.handleError)).subscribe((data:any) => {
        window.alert('Your comment updated successfully');
      })
  }

  patchComment(commentData: any) {
    return this.http.patch(`${this.baseURL}/comments/${commentData.id}`, JSON.stringify(commentData), { headers: { "Content-type": "application/json; charset=UTF-8" } })
      .pipe(catchError(this.handleError)).subscribe((data:any) => {
        window.alert('Your comment updated successfully');
      })
  }

  deleteComment(id: Number) {
    this.http.delete(`${this.baseURL}/comments/${id}`).subscribe((data:any) => {
      window.alert('Your comment deleted successfully');
    })
  }

  handleError(error) {
    return throwError(error.message || "Server Error");
  }
}
