import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }



  private API_USUARIO = "http://localhost:8080/usuarios"


  getProducto():Observable<any>{
    return this.http.get(this.API_USUARIO)
  }

  postProducto(producto: any):Observable<any>{
    return this.http.post(this.API_USUARIO, producto)
  }

 
  putProductos( producto: any,  id_usuario: any): Observable <any>{
    this.API_USUARIO= `${this.API_USUARIO}/${ id_usuario}`
    return this.http.put( this.API_USUARIO, producto)
  }

  deleteProductos( id: any): Observable <any>{
    this.API_USUARIO= `${this.API_USUARIO}/${id}`
    return this.http.delete(this.API_USUARIO)
    
  }

}
