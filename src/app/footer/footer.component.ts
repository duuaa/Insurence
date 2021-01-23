import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(window).scroll(function(){
          if($(window).scrollTop() > 1200){
              $(".iconaya").addClass("fade-in");
          }
          else{
              $(".iconaya").removeClass("fade-in");
          }
  
      })
  });
  }

}
