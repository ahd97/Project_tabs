import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../Model/Product';
import { ProductDataProvider } from '../../providers/product-data/product-data';
import { Subscription } from 'rxjs/Rx';
import { ProductCategoryDataProvider } from '../../providers/product-category-data/product-category-data';


/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  products:Product[]=[];
  public _subscription:Subscription;
  cat_id:any;
  path:any='assets/imgs/bell.jpg';
  path1:any='assets/imgs/bell_specks.jpg';
  constructor(public navCtrl: NavController, public _data:ProductDataProvider,public _navparams:NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.cat_id= this._navparams.get("id");
     this._data.getProductById(this.cat_id).subscribe((data: Product[])=>{
       this.products=data;
 
       console.log(this.products);
     },
     function(err){
       alert(err);
     },
     function(){
       console.log('done');
     }
   );
  }

}
