import { Component, OnInit } from '@angular/core';
import * as firebaseServ from '../../services/firebase/index.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private firebaseServ: firebaseServ.IndexService
  ) { }

  ngOnInit(): void {
  }

  register({name, email, password}){
    this.firebaseServ.SignUp(name,email,password)
  }

  loginWithGoogle(){
    this.firebaseServ.GoogleAuth()
  }

}
