import { Component, OnInit } from '@angular/core';
// me permite recibir parámetros tipo get
import { ActivatedRoute } from '@angular/router';
// importamos el servicio
import { HomeService } from '../../Services/home.service';
// Importamos para routear a otro componente
import { Router } from '@angular/router';
import { ProductoModel } from '../../models/producto.model';
import { ProductosService } from '../../Services/productos.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  producto = new ProductoModel();

  constructor(private activatedRoute: ActivatedRoute,
              private productosService: ProductosService) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== 'actualizar') {
      this.productosService.getProducto(id)
      .subscribe((resp: ProductoModel) => {
        this.producto = resp;
      });
    }
  }
}
