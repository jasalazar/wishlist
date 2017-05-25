import { Injectable } from '@angular/core';
import { List } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  lista: List[] = [];

  constructor() {

    let lista1 = new List('Supermarket');
    let lista2 = new List('Video Games');
    let lista3 = new List('University Stuff');

    this.lista.push( lista1 );
    this.lista.push( lista2 );
    this.lista.push( lista3 );

    console.log("Servicio iniciado");

  }

}
