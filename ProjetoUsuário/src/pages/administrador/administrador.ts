import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoaDTO } from '../../models/pessoa.dto';
import { UsuarioDTO } from '../../models/usuario.dto';
import { PessoaService } from '../../services/pessoa.service';


@IonicPage()
@Component({
  selector: 'page-administrador',
  templateUrl: 'administrador.html',
})
export class AdministradorPage {
  items: PessoaDTO[];
  nome: String;



  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public pessoaService: PessoaService) {
  }

  ionViewDidLoad() {
    let usuario: UsuarioDTO = {idPessoa:'0', login: '', senha: '', tipo: ''};
    
    this.pessoaService.getPessoaInfo(usuario).subscribe(
      (response:PessoaDTO[])=>{
        this.items = response;
        // this.pessoa = response[0];
        // this.nome = this.pessoa.nome;
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
