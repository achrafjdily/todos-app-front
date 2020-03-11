import { Links } from './../../shared/links/links.class';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private links = new Links();
  constructor(private http:HttpClient,private router:Router) { }

  signUp(fullname,email,username,password,password_confirmation){
    return this.http.post<any>(this.links.signUpLink,{ fullname : fullname , email : email,username : username,password : password,password_confirmation : password_confirmation},{headers : new HttpHeaders()});
  }
  login(username,password){
    return this.http.post<any>(this.links.loginLink,{ username : username , password : password } , { headers : new HttpHeaders()})
    .pipe(
      tap(
        data => {
          localStorage.setItem("token",data.token_type+" "+data.access_token);
          this.router.navigateByUrl("dashboard");
        }
      )
    );
  }
  async verify(){
      return await this.http.get<any>(this.links.verifyLink,this.authorizationHeaders()).toPromise()
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error || "Server Error");
  }

  authorizationHeaders(){
    return { headers : new HttpHeaders({"Authorization" : (localStorage.getItem("token"))?localStorage.getItem("token"):""})}
  }
}
