import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public httpClient:HttpClient) {}

  evento(){
    let postData = {
      "nome": "Pedro",
      "celular": "19915154848",
      "rua": "Rua Sem Saida ",
      "numero": "123",   
      "bairro": "Jd. da Saudade",
      "cidade": "Pindamonhangaba",
      "uf": "SP",
      "cpf": "44391761009",
      "tipo": "1",            
      "senha": "senha1234",
      "verbo": "POST"           
    };

      
    console.log(postData);

    let bodyString = JSON.stringify(postData); // Stringify payload
         console.log(bodyString);
    
    this.httpClient.post("https://projetorrw.000webhostapp.com/src/controll/routes/route.usuarios.php", bodyString)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });

  }

}
