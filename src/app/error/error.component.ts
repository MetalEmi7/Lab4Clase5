import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
error:string = "La ruta a la que desea ingresar no existe, por favor intente mas tarde";
  constructor() { }

  ngOnInit() {
  }

}
