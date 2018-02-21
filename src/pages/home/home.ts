import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductCategory } from '../../Model/Product_category';
import { ProductCategoryDataProvider } from '../../providers/product-category-data/product-category-data';
import { ProductByCategoryPage } from '../product-by-category/product-by-category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  product_cat:ProductCategory[]=[];
  product_cat1:ProductCategory[]=[];
  category_name:string='';
  constructor(public navCtrl: NavController,public _data:ProductCategoryDataProvider) {

  }
  ionViewDidLoad() {
    this._data.getAllProduct_cat().subscribe((data: ProductCategory[]) => {
      this.product_cat = data;
      console.log(data);
    },
      function (err) {
        alert(err);
      },
      function () {
        console.log('done');
      }
    );
  }
  onClick(id:number){
this.navCtrl.push(ProductByCategoryPage,{id:id});
  }

}
