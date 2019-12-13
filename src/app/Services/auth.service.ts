import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Estos valores los consigo desde la página oficial de firebase
  // crear usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyDxxmEKB0YNwYg8TqyMm-j27RTJr7oL_5E';

  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
   }
  // -------------------------------------------------------------------------
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('carrito');
    localStorage.removeItem('data');
  }
  // -------------------------------------------------------------------------
  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        console.log('Entro en el map y almacena token');
        // tslint:disable-next-line: no-string-literal
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }
  // -------------------------------------------------------------------------
  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    
    return this.http.post(
      `${this.url}signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        console.log('Entro en el map y almacena token');
        // tslint:disable-next-line: no-string-literal
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }
  // ----------------------------------------------------------
  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }
  // ----------------------------------------------------------
  private leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }
  // ----------------------------------------------------------
  estaAutenticado(): boolean {
    return this.userToken.length > 2;
  }
}

