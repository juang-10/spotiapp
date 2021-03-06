import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './artistas.component.html',
  styles: []
})
export class ArtistasComponent {

  artistas: any[] = [];

  constructor(private spotify: SpotifyService) { }

  buscar(termino:string){
    console.log(termino);
    this.spotify.getArtista( termino )
    .subscribe( (data: any) => {
      console.log(data);
      this.artistas = data;
    })
  }

}
