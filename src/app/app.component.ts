import { Component } from '@angular/core';
import * as userServ from './services/users/index.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-application';

  constructor(
    private userSer: userServ.IndexService
  ){
    this.userSer.getAllUsers()
  }
}
