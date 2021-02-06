import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Service listo');
  }

  getNewReleases() {

  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCw1gtuGGfxCdUsCFosjuH0sjq60y_67yB3fBz0YblwOGT61Kt7JGmUT4u9dkD032-2kT2dVq16VsTUtLk'
  });

    return this.http.get('	https://api.spotify.com/v1/browse/new-releases?country=CO&limit=6',{headers}); 
  
  }
}
