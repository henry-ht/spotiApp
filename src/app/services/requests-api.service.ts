import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsApiService {
  private baseUrl = 'https://api.spotify.com/v1/';
  constructor(private request:HttpClient) { }

  get(url:string, data?:any) {
    return this.request.get(this.baseUrl+url, { params: data });
  }

  post(url:string, data?:any) {
    return this.request.get(this.baseUrl+url, data);
  }
  
}
