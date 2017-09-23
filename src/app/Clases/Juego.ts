export class Juego
{ 
  public nombreJuego:string;
  public jugador:string;
  public resultado:boolean;

  public juega:boolean = false; // El mismo juego lo debe permitir.
  
  

constructor()
{
  this.nombreJuego="Adivina el juego";
  this.jugador=localStorage.getItem("user");
  this.resultado=false;
}

}