import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //Necesario para doble bindeo

//Necesario para rutear
import { RouterModule, Routes } from '@angular/router';

//Componentes generales
import { LoginComponent } from '../Login/Login.Component';
import { ErrorComponent } from '../Error/Error.Component';
import { MenuComponent } from '../menu/menu.component';
import { PrincipalComponent } from '../principal/principal.component';
import { JuegoService } from '../Servicios/juego.service';
import { HttpModule } from '@angular/http';

//Componentes de juegos y/o resultados
import { ListadoDeResultadoComponent } from '../listado-de-resultado/listado-de-resultado.component';
import { AdivinaElNumeroComponent } from '../adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from '../adivina-mas-listado/adivina-mas-listado.component';
import { ActividadAritmeticaComponent } from '../actividad-aritmetica/actividad-aritmetica.component';
import { MiHttpService } from '../Servicios/mi-http.service';

//Entidades
import { Juego } from '../Clases/Juego';
import { ListaComponent } from '../lista/lista.component';

const miRuteo = [
{path: "login",component: LoginComponent},
{path: "menu",component: MenuComponent,
  children:[
    {path:"adivinaElNum",
    component: AdivinaElNumeroComponent},
    {path:"actividadAritmetica",
    component: ActividadAritmeticaComponent},
    {path:"listado",
    component: ListaComponent},
    {path:"adivina+Lista",
    component: AdivinaMasListadoComponent}
  ]},
{path: "principal",component: PrincipalComponent},
{path: "listaDeResultados",component: ListadoDeResultadoComponent},
{path: "",component: LoginComponent},
{path: "**",component: ErrorComponent}
]

@NgModule({
  declarations: [
    //AppComponent,   //NO VA
    AdivinaElNumeroComponent,
    ListadoDeResultadoComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    ActividadAritmeticaComponent,
    PrincipalComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo), //Debe estar importado ya que es quien provee la tag ROUTER-OUTLET.s
  ],
})
export class RoutingModule { }
