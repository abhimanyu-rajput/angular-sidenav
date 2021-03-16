import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _cs: CommonService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checkAuthentication();

  }

  checkAuthentication = async () => {
    let isLoggedIn:any = await this._cs.isAuthenticated();
    
    if (isLoggedIn) {
        return true;
    }

    this._cs.sendMessage('warn','Invalid','Please login with valid credentials.')
    this._router.navigate(['']);
   
    return false;
  }

}//End Class
