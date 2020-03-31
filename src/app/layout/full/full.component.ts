import { AuthService } from './../../authentication/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  fullname = localStorage.getItem('user');
  menuItems = [
    {
      state : "tasks",
      title : "Tasks Calendar",
      type : "link"
    }
  ];
  constructor(private router:Router,private AuthService:AuthService) {
    this.router.events.subscribe(
      data => {
        if(data instanceof NavigationEnd){
        }
      }
    )
   }

  ngOnInit(): void {
  }

  logout(){
    this.AuthService.logout().subscribe(
      data => {}
    )
  }

}
