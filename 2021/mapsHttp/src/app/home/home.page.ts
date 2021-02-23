import { Component } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx'
import { EcopontosDTO } from '../models/ecoponto.dto';
import { HttpConfigService } from '../services/http-config.service';
import { AlertController } from '@ionic/angular'; 

declare var google;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  ecoPontos:EcopontosDTO[];
  localizacaoReferencia:any;

  constructor( private geolocation: Geolocation, 
               private httpConfigService: HttpConfigService,
               public alertCtrl: AlertController) {}

  ionViewWillEnter(){
    this.localizacaoReferencia = { lat: -22.703586, lng: -46.993531 };
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 18,
        center: this.localizacaoReferencia,
        disableDefaultUI: false
      }
    );

    this.geolocation.getCurrentPosition().then((resp) => {
      // Localização do atual Latitude Longitude
     this.localizacaoReferencia = { lat: resp.coords.latitude, lng: resp.coords.longitude };
     map.setCenter(this.localizacaoReferencia);

     const marker = new google.maps.Marker({
      position:  this.localizacaoReferencia,
      map: map,

      //Titulo
      title: "Localização Atual",

      //Animção
      animation: google.maps.Animation.DROP, // BOUNCE

      //Icone
      icon: 'assets/placeholder.png'

      
    });  


   });

   
    // Obtém as informações do Ecoponto do backend
    this.httpConfigService.getLocalizacaoEcopontos("id=0")
      .subscribe((resposta: EcopontosDTO[]) => {
       

        this.ecoPontos = resposta;

         // Imprime os marcadores no mapa
        for(let i=0;i<this.ecoPontos.length;i++){
          
          const localizacaoBackEnd = { lat: Number(this.ecoPontos[i].lat), lng: Number(this.ecoPontos[i].longi) };
          
          const marker = new google.maps.Marker({
            position: localizacaoBackEnd,
            map: map,
      
            //Titulo
            title: this.ecoPontos[i].nome,
      
            //Animção
            animation: google.maps.Animation.DROP, // BOUNCE
      
            //Icone
            //icon: 'assets/gps.png'
      
            
          });  

          google.maps.event.addListener(marker, 'click', () => {
            //Call run function to set the data within angular zone to trigger change detection.
            this.showAlert('Ecoponto','Local: '+this.ecoPontos[i].nome,'Tipos de Materiais aceitos:'+this.ecoPontos[i].descricao);
          });
        }
        
      });

  }


  async showAlert(header,subHeader,message) { 
    const alert = await this.alertCtrl.create({ 
    header: header, 
    subHeader: subHeader, 
    message: message, 
    buttons: ['OK'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
    } 


}
