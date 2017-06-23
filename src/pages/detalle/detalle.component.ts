import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
    public _listaDeseos: ListaDeseosService
  ) {
      this.idx = this.navParams.get("idx");
      this.lista = this.navParams.get("lista");
   }

  ngOnInit() {}

  actualizar( item:ListItem ){
    item.completed = !item.completed;
    this._listaDeseos.actualizarData();
    console.log(this.lista);
    console.log(this.idx);
  }
}
