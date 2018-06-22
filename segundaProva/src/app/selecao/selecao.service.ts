import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Selecao } from './selecao';
import { Grupo } from '../grupo/grupo';

@Injectable({
  providedIn: 'root'
})
export class SelecaoService {

  private selecoes: Selecao[] = [];
  grupos : Grupo[];


  constructor() { }

  addSelecao(selecao: Selecao) {
    this.selecoes.push(selecao);
  }

  getSelecoes(): Observable<Selecao[]> {
    return of(this.selecoes);
  }

  updateSelecao(selecao: Selecao) {
    let existSelecao = this.selecoes.find(sel => sel.id == selecao.id);
    existSelecao.name = selecao.name;
    existSelecao.grupo = selecao.grupo;
  }

  deleteSelecao(selecao: Selecao) {
    let index = this.selecoes.indexOf(selecao);
    this.selecoes.splice(index, 1);
  }

}
