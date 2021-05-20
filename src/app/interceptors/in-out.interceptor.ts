import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InOutInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Authorization': 'Bearer BQA4uI702aLVEsDlnHTtc9USpnIYfuIfYtEwZ_pJtuwgYJLsXa-cGM87MQRhjQ9vcRfwVq_fBWCee5PvlOk'
      },
      withCredentials: false,
    });
    return next.handle(request);
  }
}
