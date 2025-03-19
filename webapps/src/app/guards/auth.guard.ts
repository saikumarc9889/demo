import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild {
  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {

        return this.canActivate(next,state)
       
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
      return true
    }
}
