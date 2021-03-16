import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  private message = new Subject<any>();
  public getMessage = this.message.asObservable();

  public loadingBar = new BehaviorSubject(false);

  private userDetails:BehaviorSubject<any> = new BehaviorSubject('');
  public getUserDetails = this.userDetails.asObservable();
  private isLoggedIn = new BehaviorSubject(false); //Default value - false

  constructor(private _router: Router) { }

  sendMessage(type:string,summary:string,detail:string) {
    this.message.next({severity:type, summary:summary, detail:detail});
  }

  setUserDetails(details:any) {
    localStorage.setItem("user", details['user']);
    this.userDetails.next(details['user'])
    this.isLoggedIn.next(details['isValid'])
  }

  isAuthenticated() {

    if(localStorage.getItem("user")) {
      this.isLoggedIn.next(true);
    }

    return new Promise((resolve,reject) => {
      this.isLoggedIn.subscribe((res)=>{
        resolve(res); 
      })
    })
  }

  logout() {
    localStorage.removeItem('user')
    this.userDetails.next('')
    this.isLoggedIn.next(false);
    this._router.navigate(['/'])
    location.href = '/'
  }

}//End Class
