import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import * as saved_data from '../saved-data/index.service';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate, CanActivateChild {

  constructor(
    private saved_data: saved_data.IndexService,
    private router: Router
  ){}

  canActivate(): boolean {
    let user = this.saved_data.lastLoggedUser();

    if(user){
      return true;
    }
    else{
      return false;
    }
  }

  canActivateChild(): boolean{
    let user = this.saved_data.lastLoggedUser();

    if(user){
      return false;
    }
    else{
      return true;
    }
  }
  
}
