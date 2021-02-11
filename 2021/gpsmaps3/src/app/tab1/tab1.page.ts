import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mapa: string;
  logradouro:string;
  numero:string;
  bairro:string;
  cidade:string;
  estado:string;
  chave:string;

  constructor() {
    this.logradouro = 'R. Anèsia Venturini Zani';
    this.numero = '62';
    this.bairro = 'Centro';
    this.cidade = 'Jaguariúna';
    this.estado = 'SP';
    this.chave = 'AIzaSyB8uF6LvpogRa1vhXUB7DhIYje9Nis0qFM';
    this.mapa = 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key='+this.chave;

    console.log(this.mapa);
  }

  getEndereco(){
    return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }



}
