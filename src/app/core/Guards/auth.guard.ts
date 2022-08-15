import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  isLoggedIn:boolean = false;
  constructor(private accountService:AccountService) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.accountService.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    });
    if (localStorage.getItem('token') != null && this.isLoggedIn){
      return true;
    }
    else {
      return false;
    };
  }
  
}