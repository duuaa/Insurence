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
     
    $(document).ready(function(){
      $(window).scroll(function(){
          if($(window).scrollTop() > $(window).height()){
              $("#Header").css({"background-color":"#EBF5FB "});   
          }
          else{
              $("#Header").css({"background-color":"rgb(253, 254, 254,.5 )"});
          }
  
      })
  });

}

}