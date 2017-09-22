import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

//Agregados
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
//"Router" es necesario para rutear por medio del metodo "navigate()" de la variable "private router: Router" declarado en el constructor.

import { Juego } from "../Clases/Juego";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()
  listadoRecivido:Array<any>;

  constructor(private route: ActivatedRoute, private router: Router) // no es necesario activarerouter para su funcionalidad.
  {
    this.listadoRecivido = new Array<any>();
  }

  // Una forma de hacerlo: es necesario importar 'import { ParamMap, ActivatedRoute, Router } from '@angular/router';'
  Juegos(opcion)
  {
    switch (opcion) {
      case 'actividadAritmetica':
      this.router.navigate(["/actividadAritmetica"]);
        break;

      case 'adivinaElNum':
      this.router.navigate(["/adivinaElNum"]);
        break;

      default:
        break;
    }    
  }


  Metodoalguno()
  {
    console.log("[menu]Yo estube aca");
  }


  ngOnInit() {
    // alert("Bienvenido "+ localStorage.getItem("user")+"..."); //se muestra antes que la pagina
    
  }

}

