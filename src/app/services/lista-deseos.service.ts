import { Injectable } from '@angular/core';
import { List } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: List[] = [];

  constructor() {

    // let lista1 = new List('Supermarket');
    // let lista2 = new List('Video Games');
    // let lista3 = new List('University Stuff');
    //
    // this.listas.push( lista1 );
    // this.listas.push( lista2 );
    // this.listas.push( lista3 );

    this.cargarData();

  }

  actualizarData(){
    localStorage.setItem( "data", JSON.stringify( this.listas ) );
  }

  cargarData(){
    if( localStorage.getItem("data") ){
      this.listas = JSON.parse( localStorage.getItem("data") );
    }
  }

  agregarLista( lista:List ){
    this.listas.push( lista );
    this.actualizarData();
  }

  borrarLista( idx:number ){
    this.listas.splice( idx,1 );
    this.actualizarData();
  }

}
