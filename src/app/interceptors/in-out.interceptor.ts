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
        'Authorization': 'Bearer BQCx8pLGAUzoIq5lkRZqu8lZK_I2h4-xWjZ0q0cHHzUO3gQCZfg9gAkZqkdPOsFSuCw5QTLflJOQuxWlZ6E'
      },
      withCredentials: false,
    });
    return next.handle(request);
  }
}
