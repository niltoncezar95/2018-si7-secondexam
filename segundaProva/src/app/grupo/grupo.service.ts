import { Injectable } from '@angular/core';
import { Grupo } from './grupo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  
  private grupos : Grupo[] = [];

  constructor() { }

  addGrupo(grupo : Grupo) {
    this.grupos.push(grupo);
  }

  getGrupos() : Observable<Grupo[]> {
    return of(this.grupos);
  }

  updateGrupo(grupo : Grupo) {
    let existGrupo = this.grupos.find(gru => gru.id == grupo.id);
    existGrupo.name = grupo.name;
  }

  deleteGrupo(grupo: Grupo) {
    let index = this.grupos.indexOf(grupo);
    this.grupos.splice(index, 1);
  }

}
