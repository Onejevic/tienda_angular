import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    private productos: Producto[] = [
        {
            id: 1,
            nombre: 'aguacate',
            descripcion: 'Este es el aguacate',
            precio: 15,
            unidades: 1,
            img: 'assets/img/aguacate.jpg'
        },
        {
            id: 2,
            nombre: 'ajo',
            descripcion: 'Este es el ajo',
            precio: 16,
            unidades: 2,
            img: 'assets/img/ajo.jpg'
        },
        {
            id: 3,
            nombre: 'almendras',
            descripcion: 'Este es el almendras',
            precio: 17,
            unidades: 3,
            img: 'assets/img/almendras.jpg'
        },
        {
            id: 4,
            nombre: 'arandanos',
            descripcion: 'Este es el arandanos',
            precio: 18,
            unidades: 4,
            img: 'assets/img/arandanos.jpg'
        },
        {
            id: 5,
            nombre: 'brocoli',
            descripcion: 'Este es el brocoli',
            precio: 19,
            unidades: 5,
            img: 'assets/img/brocoli.png'
        },
        {
            id: 6,
            nombre: 'calabaza',
            descripcion: 'Este es el calabaza',
            precio: 20,
            unidades: 6,
            img: 'assets/img/calabaza.jpg'
        },
        {
            id: 7,
            nombre: 'canela',
            descripcion: 'Este es el canela',
            precio: 21,
            unidades: 7,
            img: 'assets/img/canela.jpg'
        },
        {
            id: 8,
            nombre: 'cebolla',
            descripcion: 'Este es el cebolla',
            precio: 21,
            unidades: 8,
            img: 'assets/img/cebolla.jpg'
        },
        {
            id: 9,
            nombre: 'fresa',
            descripcion: 'Este es el fresa',
            precio: 22,
            unidades: 9,
            img: 'assets/img/fresa.jpg'
        },
        {
            id: 10,
            nombre: 'kiwi',
            descripcion: 'Este es el kiwi',
            precio: 23,
            unidades: 10,
            img: 'assets/img/kiwi.jpg'
        },
        {
            id: 11,
            nombre: 'limon',
            descripcion: 'Este es el limon',
            precio: 24,
            unidades: 11,
            img: 'assets/img/limon.jpg'
        },
        {
            id: 12,
            nombre: 'lychee',
            descripcion: 'Este es el lychee',
            precio: 25,
            unidades: 12,
            img: 'assets/img/lychee.jpg'
        },
        {
            id: 13,
            nombre: 'maiz',
            descripcion: 'Este es el maiz',
            precio: 26,
            unidades: 13,
            img: 'assets/img/maiz.jpg'
        },
        {
            id: 14,
            nombre: 'manzana',
            descripcion: 'Este es el manzana',
            precio: 27,
            unidades: 14,
            img: 'assets/img/manzana.jpg'
        },
        {
            id: 15,
            nombre: 'naranja',
            descripcion: 'Este es el naranja',
            precio: 28,
            unidades: 15,
            img: 'assets/img/naranja.jpg'
        },
        {
            id: 16,
            nombre: 'papa',
            descripcion: 'Este es el papa',
            precio: 28,
            unidades: 16,
            img: 'assets/img/papa.jpg'
        },
        {
            id: 17,
            nombre: 'pasta',
            descripcion: 'Este es el pasta',
            precio: 29,
            unidades: 17,
            img: 'assets/img/pasta.jpg'
        },
        {
            id: 18,
            nombre: 'pimienta',
            descripcion: 'Este es el pimienta',
            precio: 30,
            unidades: 18,
            img: 'assets/img/pimienta.jpg'
        },
        {
            id: 19,
            nombre: 'repollo',
            descripcion: 'Este es el repollo',
            precio: 31,
            unidades: 19,
            img: 'assets/img/repollo.jpg'
        },
        {
            id: 20,
            nombre: 'tomate',
            descripcion: 'Este es el tomate',
            precio: 32,
            unidades: 20,
            img: 'assets/img/tomate.jpg'
        },
        {
            id: 21,
            nombre: 'zanahoria',
            descripcion: 'Este es el zanahoria',
            precio: 33,
            unidades: 21,
            img: 'assets/img/zanahoria.jpg'
        }
    ];

    constructor() {
        console.log('Servicio listo');
    }

    getProductos(): Producto[] {
        return this.productos;
    }

    getProducto(idx: number) {
        const product=this.productos.find(element=>element.id==idx);
        //console.log(product);
        return product;
    }
}
export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    unidades: number;
    img: string;
}
