import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novapagina',
  templateUrl: './novapagina.page.html',
  styleUrls: ['./novapagina.page.scss'],
})
export class NovapaginaPage implements OnInit {
  name:String;
  constructor(public navCtrol: NavController, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        if (params && params.name) {
          this.name = JSON.parse(params.name);
          console.log(params);
        }
    });
  } 

  voltar(){
    this.navCtrol.navigateBack('home');
  }

}
