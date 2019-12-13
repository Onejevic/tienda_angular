import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../Services/productos.service';
import { ProductoModel } from '../../../models/producto.model';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productos: ProductoModel[] = [];
  constructor(private productosService: ProductosService,
              private router: Router,
              private auth: AuthService) { }


  ngOnInit() { }

  buscarProductos(termino: string) {
    this.router.navigate(['/buscador', termino]);
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
    Swal.fire({
      icon: 'info', 
      text: 'Adios...' 
    });
  }

}
