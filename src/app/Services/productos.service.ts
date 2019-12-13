import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'https://heroes-ffc4e.firebaseio.com/';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.url}Productos.json`)
    .pipe(
      map(resp => this.crearArreglo(resp))
    );
  }
  private crearArreglo(productosObj: object) {
    const productos: ProductoModel[] = [];
    // console.log(productosObj);
    if (productosObj === null) {return []; }
    Object.keys(productosObj).forEach(key => {
      const producto: ProductoModel = productosObj[key];
      producto.id = key;
      productos.push(producto);
    });
    return productos;
  }

  getProducto(id: string) {
    return this.http.get(`${this.url}Productos/${id}.json`);
  }

  actualizarProducto(producto: ProductoModel) {
    return this.http.put(`${this.url}Productos/${producto.id}.json`, producto);
  }

}
