import { Component, OnInit } from '@angular/core';
import { RequestsApiService } from './../../services/requests-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading:boolean = true;
  playList:object[] = [];
  errorText:string = "";
  constructor(private requests:RequestsApiService){
  }
  
  ngOnInit(): void {
    this.getListForCountry('co', 10);
  }
  
  getListForCountry(countryCode:string, limit:number){
    // get play list
    this.requests.get('browse/new-releases', {
      'country': countryCode,
      'limit': limit
    })
    .subscribe((resp:any) => {
      console.log('hola: ', resp)
      this.playList = resp.albums.items;
    }, (error) => {this.errorText = error.error.error.message;}, () => {setTimeout(() => {this.loading = false;}, 3000)});

  }

}
