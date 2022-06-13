import { Component } from '@angular/core';

@Component({
    selector:'componente',
    templateUrl:'./componenteindex.component.html'
})
export class ComponenteIndex{

    public titulo: string;
    public comentario: string;
    public year: number;
  


    constructor(){
        this.titulo = "Portafolio de Jessica Luz Hernandez"
        this.comentario = "Este es mi primer componente de inicio"
        this.year =2022;
       
        console.log("Componente componenteindex cargado !!");
        console.log(this.titulo, this.comentario, this.year);
    }

    
    
}