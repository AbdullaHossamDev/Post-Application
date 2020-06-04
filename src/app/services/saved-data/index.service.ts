import { Injectable, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class IndexService {
  isLogged;
  constructor() {
    this.isLogged = new EventEmitter();
    this.lastLoggedUser()
  }

  saveUser(userData: any) {
    localStorage.setItem(userData.email, JSON.stringify(userData));
    this.isLogged.emit(true);
  }

  getUser(email) {
    let user = localStorage.getItem(email);
    return JSON.parse(user);
  }

  saveLoggedUser(email) {
    localStorage.setItem('loggedUser', email);
    this.isLogged.emit( true);
  }

  removeLoggedUser() {
    this.isLogged.emit( false);
    localStorage.removeItem('loggedUser');
  }

  lastLoggedUser() {
    let lastLoggedUserEmail = localStorage.getItem('loggedUser');
    if (lastLoggedUserEmail) {
      this.isLogged.emit( true)
      return this.getUser(lastLoggedUserEmail);
    }
    else {
      this.isLogged.emit( false)
      return undefined;
    }
  }

  clearStorage() {
    localStorage.clear();
  }

  isLoggedEvent() {
    return this.isLogged;
  }
}
