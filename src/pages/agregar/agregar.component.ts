import { Component, OnInit } from '@angular/core';
import { List, ListItem } from '../../app/clases/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})

export class AgregarComponent implements OnInit {

  nombreLista:string;
  nombreItem:string = "";
  items:ListItem[] = [];

  constructor() {  }

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
}
