import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { PayComponent } from './components/pay/pay.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard] },
    { path: 'pay', component: PayComponent, canActivate: [AuthGuard] },
    { path: 'buscador/:termino', component: BuscadorComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
