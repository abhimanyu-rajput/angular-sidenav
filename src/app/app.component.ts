import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'cdp';

  constructor() {
    console.log(environment.mode)
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

}//End Class
