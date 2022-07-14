import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteIndex } from './componentes/componenteindex/componenteindex.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ConstruccionComponent } from './construccion/construccion.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { MinombreComponent } from './minombre/minombre.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteIndex,
    AboutComponent,
    ConstruccionComponent,
    NavmenuComponent,
    MinombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
