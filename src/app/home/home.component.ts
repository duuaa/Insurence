import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(window).scroll(function(){
          if($(window).scrollTop() > 120){
              $(".image-main-home").addClass("fade-in");
          }
          else{
              $(".image-main-home").removeClass("fade-in");
          }
  
      })
  });

  }

}
