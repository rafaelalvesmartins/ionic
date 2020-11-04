import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { CartItem } from '../../models/cart-item';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  items : CartItem[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService) {
  }

  ionViewDidLoad() {
    let cart = this.storage.getCart();
    this.items = cart.items;
    this.loadImageUrls();
  }


  loadImageUrls(){
    for(var i=0; i<this.items.length; i++){
      let item = this.items[i];
      item.produto.imageUrl = `${API_CONFIG.serverBaseUrl}prod${item.produto.id}-small.jpg`;
    }
  }

}
