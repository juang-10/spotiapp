import { Routes } from '@angular/router'
import { CancionesComponent } from './components/canciones/canciones.component'
import { HomeComponent } from './components/home/home.component'
import { ArtistasComponent } from './components/artistas/artistas.component'

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'artistas', component: ArtistasComponent},
    { path: 'canciones', component: CancionesComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
]