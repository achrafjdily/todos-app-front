import { Component, OnInit } from '@angular/core';

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
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
