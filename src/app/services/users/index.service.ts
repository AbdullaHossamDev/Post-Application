import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  Users: Array<any>;
  baseURL: String;
  constructor(
    private http: HttpClient
  ) {
    this.baseURL = "https://jsonplaceholder.typicode.com";
    this.Users=[];
  }

  getUser(id: Number) {
    return  this.Users.find(u => u.id == id);
  }

  getAllUsers(){
    this.http.get(`${this.baseURL}/users`).subscribe((data: any) => {
      this.Users = data;
    })
  }
}
