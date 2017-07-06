import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../clases/listas';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform( listas: List[], estado: boolean = false ): List[] {

    let nuevaLista:List[] = [];

    for( let lista of listas ){

      if( lista.finished == estado ){
        nuevaLista.push( lista );
      }

    }
    return nuevaLista;
  }
}
