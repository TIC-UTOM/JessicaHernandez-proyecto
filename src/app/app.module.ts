import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteIndex } from './componentes/componenteindex/componenteindex.component';
import { ComponenteaboutComponent } from './componentes/componenteabout/componenteabout.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteIndex,
    ComponenteaboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
