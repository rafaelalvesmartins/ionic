import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: String; 
  itens = [{"nome":"Rafael"},{"nome":"Wellington"}, {"nome":"Reenye"}]
  verdadeOuFalso = false;
  emocao = "triste";

  constructor(public navCtrl: NavController) {}

  evento($event){
    console.log($event);
  }

  chamarPagina(event,name){
    console.log(event);
    console.log(name);

    //this should be within a function
  const navigationExtras: NavigationExtras = {
    queryParams: {
      name: JSON.stringify(this.name)
    }
  };
    this.navCtrl.navigateRoot('novapagina',navigationExtras);
    

  }


}
