import { Component, OnInit } from '@angular/core';
import { GrupoService } from './grupo.service';
import { Grupo } from './grupo';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  newGrupo: Grupo;
  grupos: Grupo[];

  showMessageError: boolean;

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    this.newGrupo = new Grupo();
    this.showMessageError = false;
    this.loadGrupos();
  }

  loadGrupos() {
    this.grupoService.getGrupos().subscribe(
      grupos => this.grupos = grupos
    );
  }

  saveGrupo() {
    if (this.allFieldsValid()) {
      if (!this.newGrupo.id) {
        this.newGrupo.id = (new Date()).getTime();
        this.grupoService.addGrupo(this.newGrupo);
      } else {
        this.grupoService.updateGrupo(this.newGrupo);
      }

      this.newGrupo = new Grupo();
    }
    console.log(this.grupos)
  }

  allFieldsValid() {
    this.showMessageError = false;

    if (!this.newGrupo.name || this.newGrupo.name.trim() == '') {
      this.showMessageError = true;
    }
    return !this.showMessageError
  }

  editGrupo(grupo: Grupo) {
    this.newGrupo = new Grupo(
      grupo.id, grupo.name,
    );
  }

  deleteGrupo(grupo: Grupo) {
    this.grupoService.deleteGrupo(grupo);
    this.loadGrupos();
  }
}
