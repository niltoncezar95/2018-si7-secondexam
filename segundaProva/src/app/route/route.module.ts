import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GrupoComponent } from '../grupo/grupo.component';
import { SelecaoComponent } from '../selecao/selecao.component';

const routes : Routes = [
  
  { path : 'selecao', component : SelecaoComponent },
  { path : 'grupo', component : GrupoComponent },
];

@NgModule({
  exports : [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RouteModule { }
