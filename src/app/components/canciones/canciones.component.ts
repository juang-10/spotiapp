import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styles: [
  ]
})
export class CancionesComponent {

  canciones: any[] = [];

  constructor(private spotify: SpotifyService) { }

  buscar(termino:string){
    console.log(termino);
    this.spotify.getCanciones( termino )
    .subscribe( (data: any) => {
      console.log(data);
      this.canciones = data;
    })
  }
}
