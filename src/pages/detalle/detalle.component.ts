import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { List, ListItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:any;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public _listaDeseos: ListaDeseosService,
    public alertCtrl: AlertController
  ) {
      this.idx = this.navParams.get("idx");
      this.lista = this.navParams.get("lista");
   }

  ngOnInit() {}

  actualizar( item:ListItem ){
    item.completed = !item.completed;
    let todosMarcados = true;

    for( let item of this.lista.items ){
        if( !item.completed ){
          todosMarcados = false;
          break;
        }
    }

    this.lista.finished = todosMarcados;

    this._listaDeseos.actualizarData();
  }

  borrarItem(){

    let confirm = this.alertCtrl.create({
      title: 'Eliminar Lista?',
      message: 'Esta seguro que desea eliminar la lista?',
      buttons: [
        'No',
        {
          text: 'Si',
          handler: () => {
            this._listaDeseos.borrarLista( this.idx );
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }





}
