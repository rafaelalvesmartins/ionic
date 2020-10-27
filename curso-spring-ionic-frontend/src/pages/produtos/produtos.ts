import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { ProdutoDTO } from '../../models/produto.dto';
import { ProdutoService } from '../../services/domain/produto.service';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items: ProdutoDTO[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService) {
  }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    this.produtoService.findBycategoria(categoria_id)
    .subscribe(response => {
      this.items = response['content'];
      this.loadImageUrls();
    },
      error => {}
    );
    
  }

  loadImageUrls(){
    for(var i=0; i<this.items.length; i++){
      let item = this.items[i];
      item.imageUrl = `${API_CONFIG.serverBaseUrl}prod${item.id}-small.jpg`;
    }
  }
  
  showDetail(produto_id: string){
    this.navCtrl.push('ProdutoDetailPage', {produto_id: produto_id});
  }

}
