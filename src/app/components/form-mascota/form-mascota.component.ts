import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrls: ['./form-mascota.component.css']
})
export class FormMascotaComponent {

  constructor(private servicio: MascotaService, private ruta: Router){}
  
    id_mascota:any
    edad:any
    especie:any
    nombre:any
    raza:any
  
    cargar(form: any){
  
      this.servicio.postProducto(form.value).subscribe()
  
      console.log(form.value)
      
    }
  }
  

