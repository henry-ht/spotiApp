import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('data') item:object;
  @Input('index') index:number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewArtist(item:any){
    let id:string = '';
    if(item.type == 'single' || item.type == 'artist'){
      id = item.id
    }else{
      id = item.artists[0].id;
    }

    if(id !== ''){
      this.router.navigate(['/artist', id]);

    }
  }

}
