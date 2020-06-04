import { Component } from '@angular/core';
import * as userServ from './services/users/index.service';
import * as saved_data from './services/saved-data/index.service';
import * as firebaseServ from './services/firebase/index.service';
// import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-application';
  Logged: boolean;
  eventListener;
  constructor(
    private userSer: userServ.IndexService,
    public saved_data: saved_data.IndexService,
    private firebaseServ: firebaseServ.IndexService
  ) {
    this.userSer.getAllUsers();
    this.Logged = this.saved_data.isLogged;
    this.eventListener = this.saved_data.isLoggedEvent()
      .subscribe((item) => {
        console.log('in app component: ', item)
        this.Logged = item;
      });
  }

  logout() {
    this.firebaseServ.SignOut();
  }
}
