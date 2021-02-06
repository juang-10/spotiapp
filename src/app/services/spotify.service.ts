import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from '../../environments/enviroments.dev';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Service ok');
  }

  getQuery( query: string ) {

    const url= `https://api.spotify.com/v1/${ query }`;
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.bearerToken}`
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return  this.getQuery('browse/new-releases?country=CO&limit=6')
      .pipe( map( (data:any) => data['albums'].items) );  
    }
  
  getArtista( termino: string ){

    return  this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
        .pipe( map( (data:any) => data['artists'].items) );
    }

}
