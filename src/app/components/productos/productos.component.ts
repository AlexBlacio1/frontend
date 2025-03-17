import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

    constructor(private servicio: AutorService, private ruta: Router){}

 
  id_usuario:any
  contrasena:any
  correo:any 
  nombre:any
  rol:any
  telefono:any

  editar(form: any){

    this.servicio.putProductos( form.value, this.id_usuario).subscribe()

    
  }

}
