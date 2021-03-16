import { AfterViewInit, Component, OnInit, OnChanges, SimpleChanges, Input, ElementRef, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit, AfterViewInit {


  @Input('sidenavref') sideNavRef!:SidenavComponent;

  @Input('layoutSize') layoutSize!:string;
  layoutXs:boolean = false;



  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['layoutSize']) {
      this.layoutXs = this.layoutSize=='xs'? true : false;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log(this.sideNavRef);
  }

  toggleSideNav() {
    this.sideNavRef.toggleSidenav();
  }

}
