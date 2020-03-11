import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  menuItems = [
    {
      state : 'dashboard',
      title : "Dashboard",
      type : 'link'
    },
    {
      state : "tasks",
      title : "Tasks",
      type : "sub",
      children : [
        {state : "today" , title : "Today" , type : "link"},
        {state : "week" , title : "This Week" , type : "link"},
        {state : "month" , title : "This Month" , type : "link"},
      ]
    }
  ];
  constructor(private router:Router) {
    this.router.events.subscribe(
      data => {
        if(data instanceof NavigationEnd){
          console.log(data.url)
        }
      }
    )
   }

  ngOnInit(): void {
  }

}
