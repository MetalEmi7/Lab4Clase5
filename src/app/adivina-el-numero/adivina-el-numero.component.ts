import { Component, OnInit } from '@angular/core';
import { Juego } from '../Clases/Juego';

//Agregado
import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";


@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  @Output()
  listadoEnviado :EventEmitter<Juego>;

    obj:Juego;  

    Modo_Testeo = true;
  
    nombreJuego:string = "Adivina el numero";
    descripcion:string = "Debe adivinar el numero secreto del 1 al 10, tiene como maximo 3 intentos_usuario, sino logra adivinarlo debe reiniciar el juego haciendo clic en el boton 'Nuevo', Mucha suerte";
    mensaje:string="Esperando que introduzca un numero...";
    //gane:boolean;
    //intentos:any=3;
    
    numero_Usuario:any;
    numero_Secreto:any;  
    //intentos_usuario:any=0;

    private _numMax:number=10;
    private _numMin:number=1;
    FechaYHora:Date = new Date();

  
    constructor()  {
      this.listadoEnviado = new EventEmitter<Juego>();     

      this.GenerarNum();
    }
  
  toString()
  {return "[Juego]: "+this.nombreJuego+" - [Jugador]: "+ this.obj.jugador +"  - "+this.FechaYHora.toLocaleDateString() +" - "+ this.FechaYHora.toLocaleTimeString()+" - ";}
  
  GenerarNum(){
    this.obj = new Juego();
    this.obj.juega=true;
    this.numero_Secreto = Math.floor(Math.random() * (this._numMax - this._numMin + 1)) + 1;
    this.numero_Usuario = "";
    this.mensaje="Esperando que introduzca un numero...";

    this.obj.nombreJuego=this.nombreJuego;
    this.obj.jugador=localStorage.getItem("user");

    //this.intentos_usuario=0;
    this._Inspeccion();
  }
  


  Adivinar(){
  if (this.obj.juega) {
    if (this.numero_Usuario == this.numero_Secreto){
        this.obj.resultado=true;
        this.mensaje="Usted gano!!!";
        // this.listadoEnviado.emit(this.toString()+"Gano.");            
        this.listadoEnviado.emit(this.obj);            
      }
    else{
        this.obj.resultado=false;    
        this.mensaje="Numero incorrecto, vuelva a intentarlo de nuevo";
        this.listadoEnviado.emit(this.obj);              
      }

    this.obj.juega=false;  
    }
    
  this._Inspeccion();
  }
  
  _Inspeccion()
  {
    if(this.Modo_Testeo == true)
    {
    console.log("numero_Usuario - "+this.numero_Usuario);
    console.log("numero_Secreto - "+this.numero_Secreto);
    //console.log("Obj - "+this.obj);
    //console.log(this.listadoEnviado);
    }
  }
  
  //_salida()
  //{return this.listadoEnviado;}

  ngOnInit() {}

}
