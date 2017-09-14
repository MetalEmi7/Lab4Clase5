import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase 3';

  ListaRecivida = "NADA";


  
mostrar(event)
{
  this.ListaRecivida = event;
  console.log("en app", event);
}

}
