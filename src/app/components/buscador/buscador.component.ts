import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { ProductoModel } from '../../models/producto.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  productos: ProductoModel[] = [];
  ArrProductos: ProductoModel[] = [];
  ArrProductos2: ProductoModel[] = [];
  producto2: ProductoModel;
  termino: string;
  constructor(private productosService: ProductosService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.productos = [];
      this.termino = params.termino;
      this.productosService.getProductos()
    .subscribe(resp => {
      resp.forEach(element => {
      const nombre = element.nombre.toLowerCase();
      if (nombre.indexOf(this.termino) >= 0) {
        this.productos.push(element);
      }
    });
      console.log(this.productos);
    });
    });
  }

  agregarProducto(product: ProductoModel, cantidad: number){
    // ---------------------------------------------------------
    product.unidades = product.unidades - cantidad;
    // this.ArrProductos.push(product);
    // ---------------------------------------------------------
    this.producto2 = new ProductoModel();
    this.producto2.id = product.id;
    this.producto2.nombre = product.nombre;
    this.producto2.descripcion = product.descripcion;
    this.producto2.img = product.img;
    this.producto2.precio = product.precio * cantidad;
    this.producto2.unidades = cantidad;
    // this.producto2 = {...product};
    // ---------------------------------------------------------
    this.ArrProductos.push(this.producto2);
    this.ArrProductos2.push(product);
    // ---------------------------------------------------------
    console.log('cantidad:' + cantidad);
    console.log(this.ArrProductos);
    localStorage.setItem('carrito', JSON.stringify(this.ArrProductos));
    localStorage.setItem('data', JSON.stringify(this.ArrProductos2));
    // ---------------------------------------------------------
    Swal.fire({
      icon: 'success', 
      text: 'Añadido correctamente' 
    });
  }

}
