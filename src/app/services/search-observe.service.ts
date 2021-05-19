import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchObserveService {
  private textSearch:string = '';
  private currentDate$ = new Subject<string>();
  constructor() { }

  setTextSearch(date:string) {
    this.textSearch = date;
    this.currentDate$.next(this.textSearch);
  }

  getTextSearch$(): Observable<string> {
    return this.currentDate$.asObservable();
  }
}
