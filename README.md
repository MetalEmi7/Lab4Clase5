+ Creamos un componente listado, compuesto de botones arriba y la lista de resultados como tag abajo de los botones
    + Los botones tienen eventos que muestran listas diferentes.
    + hacer que un boton instancie juegos genericos y hacer que los muestre por listadoDeResultado.
    + Crear un metodo que llame a un servicio "llamarService".
    + hacer lo mismo que antes pero en este caso es el servicio que provee la funcion para mostrar la lista.    
    + Crear otro sericio "miHttp".
        + Importamos los siguientes en miHttp.service.ts:

  import { Response, Http } from '@angular/http';
  import { Observable } from 'rxjs/Observable';

  import 'rxjs/add/operator/toPromise';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/catch';

        + Luego: 


  public httpGetPromise(url:string, Obj:any)
  {
    return this.http
    .get(url)
    .toPromise()
    .then()
    .catch()
  }

  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error;
  }
    



COMPLEMENTARIO:

Bootstrap: como instalar.

1. ir al JSON '.angular-cli.json' y encontrar el siguiente codigo:

      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"

2. <Audio 125> (7:00)>

**Investigar Instalacion.

