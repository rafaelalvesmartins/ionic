import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  peso : number;
  altura: number;
  imc: number;
  disableButton: boolean;

  
  constructor(){
    this.imc = 0;
    this.disableButton = true;

  }


  botao(){
    let hobbit = <HTMLDivElement>document.getElementById("hobbit");
    hobbit.innerHTML = "<button> Clique aqui para ver o cardapio ideal pra você </button>"
  }
  calcularImc(): number {
      let imc = 0;
      let alt = this.altura;
      let pes = this.peso;
      
      this.imc = pes / (alt ** 2);
      alert(this.imc.toFixed(2));

      this.disableButton = false;
      return this.imc;

  }
}
