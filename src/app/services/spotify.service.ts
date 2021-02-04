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
    'Authorization': 'Bearer BQC9BtBpvIQyn5ENBLOvM-iMfyZaIhUZmutLboide2jekokpoCp9vXR_gRrTrcd2NOujHjTSYq7A4mUecaU'
  });

    this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=20',{headers}) 
      .subscribe( data => {
        console.log(data);
      });

  }
}
