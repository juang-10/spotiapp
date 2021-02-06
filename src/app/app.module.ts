import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Importar rutas
import { ROUTES } from './app.routes';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { CancionesComponent } from './components/canciones/canciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistasComponent,
    NavbarComponent,
    CancionesComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
