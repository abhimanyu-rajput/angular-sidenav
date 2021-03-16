import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _cs: CommonService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this._cs.loadingBar.next(true);
    
    return next.handle(request).pipe(
      finalize(() => {
        this._cs.loadingBar.next(false);
      })
    );

  }
}
