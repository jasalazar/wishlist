import { Component, OnInit } from '@angular/core';
import { List, ListItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})

export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string = "";
  items:ListItem[] = [];

  constructor(
    public alertCtrl:AlertController,
    public navCtrl:NavController,
    public _listaDeseos:ListaDeseosService
  ) {  }

  ngOnInit() {}

  agregar(){

    if( this.nombreItem.length == 0 ){
      return;
    }

    let item = new ListItem();
    item.name = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";

  }

  borrarItem( index:number ){

    this.items.splice( index,1 );

  }

  guardarLista(){

    if( this.nombreLista.length == 0 ){
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista?',
        subTitle: 'El nombre de la lista es necesario!',
        buttons: ['OK']
      });
      return;
    }

    let lista = new List( this.nombreLista );
    lista.items = this.items;
    //this._listaDeseos.listas.push( lista );
    this._listaDeseos.agregarLista( lista );
    this.navCtrl.pop();
  }





}
