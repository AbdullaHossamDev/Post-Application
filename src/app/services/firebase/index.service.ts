import { Injectable } from '@angular/core';

import { auth } from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { throwError } from 'rxjs';

import * as saved_data from '../saved-data/index.service'
@Injectable({
  providedIn: 'root'
})
export class IndexService {
  signedUserName: String;
  signedUserPassword: String;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private saved_data: saved_data.IndexService
  ) { }

  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          this.SignOut();
          window.alert('You should verify your email first')
        } else {
          this.SetUserData(result.user);
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  SignUp(name, email, password) {
    this.signedUserName = name;
    this.signedUserPassword = password;
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail()
        let newUser = JSON.parse(JSON.stringify(result.user))
        newUser.name = name;
        newUser.password;
        this.saved_data.saveUser(newUser);
      }).catch((error) => {
        window.alert(error.message)
      })
  }


  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  SendVerificationMail() {
    return this.afAuth.currentUser.then((user) => {
      if (user) {
        user.sendEmailVerification().then(() => {
          this.router.navigate(['/auth/login'])
        })
      }
    })
  }

  SetUserData(user) {
    let savedUser = this.saved_data.getUser(user.email)

    if(savedUser){
      let {name, password} = savedUser;
      let newUserData = JSON.parse(JSON.stringify(user))
      newUserData.name = name;
      newUserData.password = password;
      this.saved_data.saveLoggedUser(newUserData.email)
      this.saved_data.saveUser(newUserData);
    }else{
      let newUserData = JSON.parse(JSON.stringify(user))
      newUserData.name = newUserData.email;
      this.saved_data.saveUser(newUserData);
      this.saved_data.saveLoggedUser(newUserData.email)
    }
    this.router.navigate(['/panel/posts'])
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.saved_data.removeLoggedUser()
    })
  }
}
