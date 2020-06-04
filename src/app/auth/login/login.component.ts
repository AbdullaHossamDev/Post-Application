import { Component, OnInit } from '@angular/core';
import * as firebaseServ from '../../services/firebase/index.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private firebaseServ: firebaseServ.IndexService
  ) { }

  ngOnInit(): void {
  }

  login({email, password}){
    this.firebaseServ.SignIn(email,password)
  }

  loginWithGoogle(){
    this.firebaseServ.GoogleAuth()

  }

}
