import { ComponenteIndex } from './componentes/componenteindex/componenteindex.component';

import { AboutComponent } from './about/about.component';
import { ConstruccionComponent } from './construccion/construccion.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: ComponenteIndex},
  { path: 'about', component: AboutComponent},
  { path: 'construccion', component: ConstruccionComponent}
];


@NgModule(
  {imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  
})
export class AppRoutingModule { }
