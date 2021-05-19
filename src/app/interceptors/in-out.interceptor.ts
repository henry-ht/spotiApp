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
        'Authorization': 'Bearer BQBKPjeI3_CePMKoc_DkfFvgZz20m3AerLyTr8mljcIYJolAdedBW-fNUVEk5gsF7xbQpriEsSDV7GOZvPA'
      },
      withCredentials: false,
    });
    return next.handle(request);
  }
}
