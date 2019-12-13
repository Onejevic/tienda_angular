import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoModel } from '../../models/producto.model';
import { ProductosService } from '../../Services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: ProductoModel[] = [];
  constructor(private productosService: ProductosService, private router: Router) { }

  ArrProductos: ProductoModel[] = [];
  ArrProductos2: ProductoModel[] = [];

  // cantidad=5;
  producto2: ProductoModel;
  ngOnInit() {
    this.productosService.getProductos()
    .subscribe(resp => {
      // console.log(resp);
      this.productos = resp;
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
