import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioDTO } from "../../models/usuario.dto";
import { StorageService } from '../../services/storage.service';


@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email:string;
  senha:string;
  usuario : UsuarioDTO;

  constructor(public navCtrl: NavController,
              public usuarioService : UsuarioService,
              public alertController: AlertController,
              public storage: StorageService) {

  }

   login(){
    if(this.email === undefined || this.senha === undefined || this.email.length == 0 ||  this.senha.length == 0){//valores inseridos
      this.presentAlert("Digite o email e a senha!");
    }else{
      this.usuario = {idPessoa:'', login: this.email, senha: this.senha, tipo: ''};
      this.usuarioService.login(this.usuario).subscribe(
        (response:any)=>{
          //console.log(response);
          if(response.hasOwnProperty('erro')){ // Erro ao logar
            this.presentAlert("Erro ao logar:"+response.erro);
          }else{
            this.usuario = response;
            this.storage.setUsuario(this.usuario);
            
            if(this.usuario.tipo == 'comum'){
              this.presentAlert("Seja bem vindo, seu perfil é comum!");
              this.navCtrl.setRoot('UsuariosPage');
            }else{
              this.presentAlert("Seja bem vindo, seu perfil é adm!");
              this.navCtrl.setRoot('AdministradorPage');
            }
          }
        
        },
        error=>{
          this.presentAlert("Erro ao logar:"+error);
        }
      );
    }
    

  }

  presentAlert(messagem:string) {
    let alert = this.alertController.create({
      title: 'Aviso',
      subTitle: messagem,
      buttons: ['ok']
    });
    alert.present();
  }
  

}
