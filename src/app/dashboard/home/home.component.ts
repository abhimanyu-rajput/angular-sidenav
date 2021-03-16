import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  watcher: Subscription;
  layoutSize:string = 'lg';

  constructor(private mediaObserver: MediaObserver, public _cs: CommonService) {

    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      
      this.layoutSize = change.mqAlias;
      // console.log(this.layoutSize);
      // this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      // if ( change.mqAlias == 'xs') {
      //    this.loadMobileContent();
      // }
    });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}//End
