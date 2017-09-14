import { Component, OnInit } from '@angular/core';

//Agregados para rutear a otros componentes.
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
User:string;
Pass:string;

  constructor(private route: ActivatedRoute, private router: Router)
  {}

  Loguearse()
  {  
    console.log("Hola user");
    //Hardcode
    if (this.User == "admin" && this.Pass == "123456")
      {
        this.router.navigate(["/menu"]);
        localStorage.setItem("user", this.User);
      }
  }

  ngOnInit() {
  }

}
