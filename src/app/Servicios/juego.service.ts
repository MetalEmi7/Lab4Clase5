import { Injectable } from '@angular/core';
import { Juego } from '../Clases/Juego';

import { MiHttpService } from '../Servicios/mi-http.service';

@Injectable()
export class JuegoService {
  Lista_Juegos:Array<Juego>;

  constructor(public miHttp : MiHttpService) 
  {
    this.Lista_Juegos = new Array<Juego>();
  } 

  Listar()
  { 
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);
      this.Lista_Juegos.push(new Juego);

      return this.Lista_Juegos;
  }

    public ListarRest()
    {
      
      this.miHttp.httpGetPromise('https://restcountries.eu/rest/v2/all',"any")
      .then(data=>{console.log(data)})
      .catch(error=>{console.log(error)})

    }

}
