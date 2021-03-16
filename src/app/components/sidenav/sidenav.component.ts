import { Component, ElementRef, Input, OnInit, OnChanges, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('ToggleNav') toggleNav!:ElementRef;
  @ViewChild('Nav') nav!:ElementRef;

  @Input('layoutSize') layoutSize!:string;

  layoutXs:boolean = false;
  layoutMd:boolean = false;

  navItems!:any

  constructor(private _cs: CommonService) { 
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['layoutSize']) {
      this.layoutXs = this.layoutSize=='xs'? true : false;
      this.layoutMd = this.layoutSize=='md' || this.layoutSize=='sm'? true : false;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.navItems = document.querySelectorAll('li');
    // this.navItems.forEach((item:any) => {
    //   // item.addEventListener('click',(event:Event)=>{this.setActive(event)})
    //   item.addEventListener('click',this.setActive.bind(this))
    // })
  }

  activeNav(nav:string) {
    this.navItems.forEach((l:any)=> l.classList.remove('sidenavbar__listitem-active'));
    document.getElementById(nav)?.classList.add('sidenavbar__listitem-active');
  }

  toggleSidenav() {
    if(this.layoutXs) {
      this.nav!.nativeElement.classList.toggle('sidenavbar-show-xs');
      return;
    }
    this.nav!.nativeElement.classList.toggle('sidenavbar-closed');
  }

  logout() {
    this._cs.logout();
  }

}
