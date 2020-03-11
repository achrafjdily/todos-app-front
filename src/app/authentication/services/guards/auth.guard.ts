import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authStatus;
  constructor(private authservice: AuthService, private router: Router) {
  }
  async canActivate(): Promise<boolean> {
    await this.authservice.verify().then(
      data => {
        this.authStatus = true;
        }).catch(
          error => {
             this.authStatus = false;
            });
    if (!this.authStatus) {
      this.router.navigate(['/auth/login']);
    }
    return this.authStatus;
  }
}
