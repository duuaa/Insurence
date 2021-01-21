import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = function () { 
      "use strict";
      if (document.body.scrollTop >= 1 ) {
        document.getElementById('Header').classList.add("nav-colored");
        document.getElementById('Header').classList.remove("nav-transparent");
      } 
      else {
        document.getElementById('Header').classList.add("nav-transparent");
        document.getElementById('Header').classList.remove("nav-colored");
      }
  };

  }


}
