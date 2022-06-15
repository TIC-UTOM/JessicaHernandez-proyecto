import { Component } from '@angular/core';

@Component({
    selector:'componente',
    templateUrl:'./componenteindex.component.html'
})
export class ComponenteIndex{

    public titulo: string;
    public comentario: string;

  


    constructor(){
        this.titulo = "Jessica Luz Hernandez"
        this.comentario = ""

       
        console.log("Componente componenteindex cargado !!");
        console.log(this.titulo);
    }

    
    
}