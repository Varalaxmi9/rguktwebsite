import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularproject';
  
  public ngOnInit(){
    $(document).ready(function(){
      $(".sidebar-btn").click(function(){
          $(".wrapper").toggleClass("show");
      });
 });
 
  
  }
}
