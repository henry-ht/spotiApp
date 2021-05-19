import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchObserveService } from 'src/app/services/search-observe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  textSearch:string = '';
  constructor(private router:Router, private searchObv:SearchObserveService) { }

  ngOnInit(): void {
  }

  searchText(text:string):void{
    text = text.toLowerCase();
    this.searchObv.setTextSearch(text);
  }

}
