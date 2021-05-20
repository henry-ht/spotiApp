import { Component, OnInit } from '@angular/core';
import { ɵDomSanitizerImpl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RequestsApiService } from 'src/app/services/requests-api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  loading:boolean = true;
  artist:object[] = [];
  tracksArtist:object[] = [];
  errorText:string = "";
  constructor(private requests:RequestsApiService, private route:ActivatedRoute, private sanitizer:ɵDomSanitizerImpl){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.requests.get('artists/'+ params['id'])
      .subscribe((resp:any) => {
        this.artist.push(resp);
      }, (error) => {this.errorText = error.error.error.message;}, () => {setTimeout(() => {this.loading = false;}, 3000)});

      this.requests.get('artists/'+params['id']+'/top-tracks', {
        'market': 'us'
      })
      .subscribe((resp:any) => {
        console.log('ok vamos: ', resp)
        this.tracksArtist = resp.tracks;
      }, (error) => {this.errorText = error.error.error.message;}, () => {setTimeout(() => {this.loading = false;}, 3000)});
      
    });
    
  }

  sanitizeUrl(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
