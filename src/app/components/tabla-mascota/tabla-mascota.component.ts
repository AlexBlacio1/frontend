import { Component } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-tabla-mascota',
  templateUrl: './tabla-mascota.component.html',
  styleUrls: ['./tabla-mascota.component.css']
})
export class TablaMascotaComponent {

  constructor(private servicio: MascotaService){}
  
  
    data:any
    ngOnInit(){
      this.servicio.getProducto().subscribe(p=>{
        this.data =p
      })
    }
  
    eliminar(id: any){
      this.servicio.deleteProductos(id).subscribe()
      location.reload()
    }
  }
