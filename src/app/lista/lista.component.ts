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

  constructor( MiServicio:JuegoService )
  {
     this.Propiedad = MiServicio;

     this.Lista_Juegos = new Array<Juego>();
  }

  llamarService()
  {
    this.Lista_Juegos = this.Propiedad.Listar();
    
    /*
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);
      */

  }

    public llamarService_Listar()
  {
    
    
    
    this.Lista_Juegos = this.Propiedad.Listar();
    
    
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);
      

  }

  ngOnInit() {
  }

}
