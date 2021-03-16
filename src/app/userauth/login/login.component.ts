import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, of } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('LoginBtn') loginBtn!:ElementRef;

  year = new Date().getFullYear();

  user:any = {name:'',password:''};

  constructor(private _cs:CommonService,private _router: Router) { }

  ngOnInit():void {
  }

  ngAfterViewInit() {

    fromEvent(this.loginBtn.nativeElement,'click')
    .pipe(
      exhaustMap(() => this.isLoggedIn())
    )
    .subscribe((res) => {
      if(res.isValid) {
        this._cs.setUserDetails(res);
        this._router.navigate(['dashboard'])
      }
      else {
        this._cs.sendMessage('error','Invalid User','Please login with valid credentials.')
      }
      
    });

  }

  isLoggedIn = ()=>{
    if(this.user['name']=='testuser' && this.user['password']=='test123') {
      return of({user: 'Test User', isValid: true});
    }
    
    return of({user: 'Test User', isValid: false});
  }


}//End
