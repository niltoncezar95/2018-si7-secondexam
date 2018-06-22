import { Grupo } from "../grupo/grupo";

 export class Selecao {

     id : number;
     name : string;
     grupo : Grupo;

     constructor(id?: number, name?: string, grupo?: Grupo ) {

         this.id = id;
         this.name = name;
         this.grupo = grupo;
     }

 }