import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoaDTO } from '../../models/pessoa.dto';
import { UsuarioDTO } from '../../models/usuario.dto';
import { PessoaService } from '../../services/pessoa.service';
import { StorageService } from '../../services/storage.service';



@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  usuario : UsuarioDTO; 
  pessoa : PessoaDTO;
  items: PessoaDTO[];
  nome: String;

  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public pessoaService:PessoaService,
            public storage: StorageService
             ) {
  }

  ionViewDidLoad() {

    this.usuario = this.storage.getUsuario();
    this.pessoaService.getPessoaInfo(this.usuario).subscribe(
      (response:PessoaDTO[])=>{
        this.items = response;
        this.pessoa = response[0];
        this.nome = this.pessoa.nome;

        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
