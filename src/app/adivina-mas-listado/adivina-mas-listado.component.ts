
import { Component, OnInit } from '@angular/core';
import { Juego } from '../Clases/Juego';

@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
//DECLARAR ARRAY QUE RECIBA JUEGOS
  public ListadoJuegosJugados:Array<Juego>;

  constructor() {
    this.ListadoJuegosJugados = new Array<Juego>();
  }
  
  ngOnInit() {}

//TraerResultadodeJuego(juego:Juego);
traerListado(Lista:Juego)
{
  //this.ListadoJuegosJugados = Lista;
  this.ListadoJuegosJugados.push(Lista);
  //console.log("DESDE A+L - "+this.ListadoJuegosJugados);
}


}
