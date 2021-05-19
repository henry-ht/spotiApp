import { Component, OnInit } from '@angular/core';
import { RequestsApiService } from './../../services/requests-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading:boolean = true;
  playList:object = [];
  constructor(private requests:RequestsApiService){
  }
  
  ngOnInit(): void {
    // get play list
      this.requests.get('browse/new-releases', {
        'country': 'CO'
      })
      .subscribe((resp:any) => {
        console.log('ok subele: ', resp);
        this.playList = resp.albums.items;
      }, null, () => {setTimeout(() => {this.loading = false;}, 3000)});
  }

}
