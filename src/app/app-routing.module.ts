import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanettedetailComponent } from './components/planettedetail/planettedetail.component';
import { VaisseaudetailComponent } from './components/vaisseaudetail/vaisseaudetail.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { EditplanetComponent } from './components/editplanet/editplanet.component';
import { EditvaisseauComponent } from './components/editvaisseau/editvaisseau.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home',  component: HomeComponent },
{ path: 'vaisseaux',  component: VaisseauxComponent },
{ path: 'planets',  component: PlanetsComponent } ,
{ path: 'planets/add',  component: AddPlanetComponent }, // avant le :id ,add est un nom libre
{ path: 'planets/:id',  component: PlanettedetailComponent },  // id est un nom de variable libre, reconnu par les :
{ path: 'planets/maj/:id',  component: EditplanetComponent },
{ path: 'vaisseaux/add',  component: AddVaisseauComponent }, // avant le :id ,add est un nom libre
{ path: 'vaisseaux/:id',  component: VaisseaudetailComponent },
{ path: 'vaisseaux/maj/:id',  component: EditvaisseauComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
