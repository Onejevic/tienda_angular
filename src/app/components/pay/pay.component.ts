import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../models/producto.model';
import { ProductosService } from '../../Services/productos.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  productos: ProductoModel[] = [];
  productos2: ProductoModel[] = [];
  constructor(private productosService: ProductosService,
              private router: Router) { }

  ngOnInit() {
    this.productos = JSON.parse(localStorage.getItem('carrito'));
    this.productos2 = JSON.parse(localStorage.getItem('data'));
  }

  actualizarProductos(ArrProducto: ProductoModel[]) {
    ArrProducto.forEach(element => {
      // ----------------------------------------------
      // ----------------------------------------------
      this.productosService.actualizarProducto(element).subscribe(resp => {
        console.log(resp);
      });
      Swal.fire({
        allowOutsideClick: false, // esto me permite que no puedan cerrarlo dando click afuera
        icon: 'info', // coloco el ícono
        text: 'Dato actualizado' // mensaje a mostrar
      });
      localStorage.removeItem('data');
      localStorage.removeItem('carrito');
      this.router.navigateByUrl('/home');
    });
  }
}
