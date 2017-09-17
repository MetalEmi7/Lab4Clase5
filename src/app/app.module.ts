import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //Necesario para doble bindeo
import { AppComponent } from './app.component';

//Necesario para rutear
import { RouterModule, Routes ,RouterLinkActive} from '@angular/router';

//Componentes generales
import { LoginComponent } from './Login/Login.Component';
import { ErrorComponent } from './Error/Error.Component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { JuegoService } from './Servicios/juego.service';
import { HttpModule } from '@angular/http';

//Componentes de juegos y/o resultados
import { ListadoDeResultadoComponent } from './listado-de-resultado/listado-de-resultado.component';
import { AdivinaElNumeroComponent } from './adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './adivina-mas-listado/adivina-mas-listado.component';
import { ActividadAritmeticaComponent } from './actividad-aritmetica/actividad-aritmetica.component';
import { MiHttpService } from './Servicios/mi-http.service';

import { RoutingModule } from "./routing/routing.module";

//Entidades
import { Juego } from './Clases/Juego';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,     //Debe estar importado ya que es quien provee la tag ROUTER-OUTLET.
    HttpModule
  ],
  providers: [
    JuegoService,
    MiHttpService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
