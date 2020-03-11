import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReverseAuthGuard implements CanActivate {
  authStatus;
  route;
  constructor(private authservice: AuthService, private router: Router) {
  }
  async canActivate(): Promise<boolean> {
    await this.authservice.verify().then(
      data => {
        this.authStatus = false;
        }).catch(
          error => {
             this.authStatus = true;
            });
    if (!this.authStatus) {
      this.router.navigate(['/dashboard']);
    }
    return this.authStatus;
  }
}
