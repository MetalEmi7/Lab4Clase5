import { Component, OnInit } from '@angular/core';
import { Juego } from '../Clases/Juego';
import { JuegoService } from '../Servicios/juego.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
Lista_Juegos:Array<Juego>;
Propiedad:JuegoService;

Lista_Rest:Array<any>;

  constructor( MiServicio:JuegoService )
  {
     this.Propiedad = MiServicio;

     this.Lista_Juegos = new Array<Juego>();
     this.Lista_Rest = new Array<any>();
  }



  listarObjetos()
  {
    console.log("Desde componente listado (nombrado como lista)");
    this.Lista_Juegos.push(new Juego);
    this.Lista_Juegos.push(new Juego);
    this.Lista_Juegos.push(new Juego);
    this.Lista_Juegos.push(new Juego);
  }

    
  public llamarService_Listar()
  {    
    console.log("Desde componente listado se llama al servicio JUEGO");
    this.Lista_Juegos = this.Propiedad.Listar();
  }


  /**
   * LlamarService_ListarREST
   */
  public llamarService_ListarREST() {
    console.log("LISTANDO REST...");
    this.Propiedad.ListarRest();
    alert("Ver en Consola");
  }   

  ngOnInit() {}

}
