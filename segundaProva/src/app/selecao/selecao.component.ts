import { Component, OnInit } from '@angular/core';
import { Selecao } from './selecao';
import { SelecaoService } from './selecao.service';
import { Grupo } from '../grupo/grupo';
import { GrupoService } from '../grupo/grupo.service';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  newSelecao: Selecao;

  selecoes: Selecao[];

  grupos : Grupo[];

  showMessageError1: boolean;
  showMessageError2: boolean;


  constructor(private selecaoService: SelecaoService,
              private grupoService : GrupoService) { }

  ngOnInit() {
    this.newSelecao = new Selecao();
    this.loadGrupos();
    this.loadSelecoes();
  }

  loadSelecoes() {
    this.selecaoService.getSelecoes().subscribe(
      selecoes => this.selecoes = selecoes
    );
  }

  loadGrupos() {
    this.grupoService.getGrupos().subscribe(
      grupos => this.grupos = grupos
    );
  }

  saveSelecao() {
    if (this.allFieldsValid()) {
      if (!this.newSelecao.id) {
        this.newSelecao.id = (new Date()).getTime();
        this.selecaoService.addSelecao(this.newSelecao);
      } else {
        this.selecaoService.updateSelecao(this.newSelecao);
      }

      this.newSelecao = new Selecao();
    }
  }

  allFieldsValid() {
    this.showMessageError1 = false;
    this.showMessageError2 = false;

    if (!this.newSelecao.name || this.newSelecao.name.trim() == '') {
      this.showMessageError1 = true;
    }

    if (!this.newSelecao.grupo) {
      this.showMessageError2 = true;
    }

    return !this.showMessageError1 && !this.showMessageError2
  }

  editSelecao(selecao: Selecao) {
    this.newSelecao = new Selecao(
      selecao.id, selecao.name,
      selecao.grupo
    );
  }

  deleteSelecao(selecao: Selecao) {
    this.selecaoService.deleteSelecao(selecao);
    this.loadSelecoes();
  }
}


