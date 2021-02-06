import { Routes } from '@angular/router'
import { CancionesComponent } from './components/canciones/canciones.component'
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'canciones', component: CancionesComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
]