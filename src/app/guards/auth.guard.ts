// importamos los paquetes necesario para el servicio guard
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // implementamos en el constructor el servicio AuthService para usar el método
  // de 'estaAutenticado, y router para reenviar a un nuevo componente
  constructor(private auth: AuthService,
              private router: Router) {}

  // dentro del canActivated hacemos toda la validación
  canActivate(): boolean {
    // si está autenticado retornará true
    if (this.auth.estaAutenticado()) {
      return true;
    // si no lo está, navegará a login y retorna false
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}

