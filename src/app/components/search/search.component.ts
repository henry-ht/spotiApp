import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchObserveService } from 'src/app/services/search-observe.service';
import { RequestsApiService } from './../../services/requests-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  textSearch:string = '';
  loading:boolean = true;
  searchArtist:object[] = [];
  errorText:string = "";
  constructor(private router:Router, private searchObv:SearchObserveService, private request:RequestsApiService) { }

  ngOnInit(): void {
  }

  searchText(text:string):void{
    if(text.length >= 3){
      this.loading = true;
      text = text.toLowerCase();
      this.searchObv.setTextSearch(text);
      this.request.get('search', {
        q: text,
        type: 'artist'
      })
      .subscribe((resp:any) => {
        this.searchArtist = resp.artists.items;
      }, (error) => {this.errorText = error.error.error.message;}, () => {setTimeout(() => {this.loading = false;}, 3000)});
    }
  }

}
