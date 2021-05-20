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
        'Authorization': 'Bearer BQBhnZ5vOrzr7_L74vDGSyT21nMPnjDSfpD9ZNdhZtO1DsyqZWN0KR38RY_X7NEMNdbGD-6fk0rTCYpcToA'
      },
      withCredentials: false,
    });
    return next.handle(request);
  }
}
