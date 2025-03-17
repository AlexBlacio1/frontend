import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TablaComponent } from 'src/app/components/tabla/tabla.component';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private servicio: AutorService, private ruta: Router){}

  id_usuario:any
  contrasena:any
  correo:any 
  nombre:any
  rol:any
  telefono:any

  cargar(form: any){

    this.servicio.postProducto(form.value).subscribe()

    console.log(form.value)

  }
}

