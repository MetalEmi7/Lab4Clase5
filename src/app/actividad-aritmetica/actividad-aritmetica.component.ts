import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-aritmetica',
  templateUrl: './actividad-aritmetica.component.html',
  styleUrls: ['./actividad-aritmetica.component.css']
})
export class ActividadAritmeticaComponent implements OnInit {

  constructor() { }

MostrarAlgo()
{
  alert("Actividad de algo");
}

  ngOnInit() {
  }

}
