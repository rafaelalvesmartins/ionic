import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  constructor(private geolocation: Geolocation) {}


  ionViewWillEnter(){ //Ao entrar ná página

    this.geolocation.getCurrentPosition().then((resp) => {
   
    // Localização do atual Latitude Longitude
    const localizacaoAtual = { lat: resp.coords.latitude, lng: resp.coords.longitude };
    const localizacaoSenai = { lat: -22.703586, lng: -46.993531 };

     const map = new google.maps.Map(
      document.getElementById("map2") as HTMLElement,
      {
        zoom: 18,
        center: localizacaoAtual,
        disableDefaultUI: true
      });
      this.directionsDisplay.setMap(map);

      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: localizacaoAtual,
        destination: localizacaoSenai,
        travelMode: 'WALKING' //DRIVING
      };

      const marker = new google.maps.Marker({
        position: localizacaoAtual,
        map: map,
  
        //Titulo
        title: 'Localização Atual',
  
        //Animção
        animation: google.maps.Animation.BOUNCE, // BOUNCE
   
        //Icone
        icon: 'assets/gps.png'
  
        
      }); 

      this.traceRoute(this.directionsService, this.directionsDisplay, request);

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }


  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }
}
