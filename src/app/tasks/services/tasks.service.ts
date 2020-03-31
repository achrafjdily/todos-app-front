import { Links } from './../../shared/links/links.class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private links = new Links();
  constructor(private http:HttpClient) { }

  my(){
    return this.http.get<any>(this.links.MyTasksLink, this.authorizationHeaders())
  }
  create(name,date){
    return this.http.post<any>(this.links.createTaskLink,{name : name , date : date}, this.authorizationHeaders());
  }
  update(id,date){
    return this.http.post(this.links.updateTaskLink,{id : id , date : date}, this.authorizationHeaders());
  }
  delete(id){
    return this.http.post(this.links.deleteTaskLink,{id : id}, this.authorizationHeaders());
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error || "Server Error");
  }

  authorizationHeaders(){
    return { headers : new HttpHeaders({"Authorization" : (localStorage.getItem("token"))?localStorage.getItem("token"):""})}
  }
}
