import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnauthedGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService.isSignedIn.pipe(map((v) => {
      if (v) {
        return this.router.parseUrl('/')
      }
      return true;
    }))
  }
}
