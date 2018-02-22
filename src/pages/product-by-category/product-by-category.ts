import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDataProvider } from '../../providers/product-data/product-data';
import { Product } from '../../Model/Product';
import { Subscription } from 'rxjs/Rx';
import { ProductPage } from '../product/product';
import { LogInPage } from '../log-in/log-in';
/**
 * Generated class for the ProductByCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-by-category',
  templateUrl: 'product-by-category.html',
})
export class ProductByCategoryPage {
  prod_name:string='';
  products:Product[]=[];
  public _subscription:Subscription;
  cat_id:any;

  constructor(public navCtrl: NavController, public _navparams:NavParams,public _data:ProductDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductByCategoryPage');
    this.cat_id= this._navparams.get("id");
    this._data.getProductByCategoryId(this.cat_id).subscribe((data: Product[])=>{
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
  onClick(id:number){
    this.navCtrl.push(ProductPage,{id:id});
  }

  onCart(id:number){
    localStorage.setItem('Product_id',id.toString());
    this.navCtrl.push(LogInPage);
  }
}
