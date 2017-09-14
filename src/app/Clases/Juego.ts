export class Juego
{ 
  public nombreJuego:string;
  public jugador:string;
  public resultado:boolean;

  public juega:boolean = false; // El mismo juego lo debe permitir.
  
  

constructor()
{
  this.nombreJuego="nom";
  this.jugador="jug";
  this.resultado=false;
}

}