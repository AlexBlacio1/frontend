import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient) { }
  
  
  
    private API_MASCOTA = "http://localhost:8080/mascotas"
  
  
    getProducto():Observable<any>{
      return this.http.get(this.API_MASCOTA)
    }
  
    postProducto(producto: any):Observable<any>{
      return this.http.post(this.API_MASCOTA, producto)
    }
  
   
    putProductos( producto: any, id: any): Observable <any>{
      this.API_MASCOTA= `${this.API_MASCOTA}/${id}`
      return this.http.put( this.API_MASCOTA, producto)
    }
  
    deleteProductos(id: any): Observable <any>{
      this.API_MASCOTA= `${this.API_MASCOTA}/${id}`
      return this.http.delete(this.API_MASCOTA)
      
    }
  
  }
  
