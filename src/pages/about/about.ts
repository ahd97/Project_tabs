import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { Product } from '../../Model/Product';
import { ProductDataProvider } from '../../providers/product-data/product-data';
import { Cart } from '../../Model/Cart';
import { CartDataProvider } from '../../providers/cart-data/cart-data';
import { UserMaster } from '../../Model/User';
import { Cart_detail } from '../../Model/Cart_detail';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { CartDetailDataProvider } from '../../providers/cart-detail-data/cart-detail-data';
import { SalesOrder } from '../../Model/Sales_order';
import { SalesOrderDataProvider } from '../../providers/sales-order-data/sales-order-data';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  public cartDetail:Cart_detail[]=[];
  public cartDetail1:Cart_detail;
  public cart:Cart[]=[];
  public cart_id:number;
  public qty:number;
  public Product_id:number;
  public products:Product[]=[];
  public _subscription:Subscription;
  public user_name:string;
  id:number;
  Qty:number;
  constructor(public navCtrl: NavController, public navparams:NavParams, public _data:ProductDataProvider,public _cart:CartDataProvider,public _cartDetail:CartDetailDataProvider) {

  }
  ionViewDidLoad(){
 this.Product_id=parseInt( localStorage.getItem('Product_id'));
 this.id=parseInt( localStorage.getItem('Product_id'));
 this.user_name=localStorage.getItem('User_name');
  this._data.getProductById(this.Product_id).subscribe((data: Product[])=>{
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
this._cart.getCartidByUsername(this.user_name).subscribe((data: Cart[])=>{
  this.cart=data;
  this.cart_id=data[0].Cart_id;
  console.log(data);
  this._cartDetail.addCart_detail(new Cart_detail(this.cart_id,this.Product_id,1)).subscribe(
    (data:any)=>{
      console.log(data);
    },function(err){
      console.log(err);
    },
    function(){
  
    }
  );
},
function(err){
  alert(err);
},
function(){
  console.log('done');
}

);
  }

  onUpdate(){
    this.cartDetail1=new Cart_detail(this.cart_id,this.Product_id,this.qty);
    console.log(this.qty);
    this._cartDetail.updateCart_detail(this.cart_id,this.Product_id,this.cartDetail1).subscribe(
      (data:any)=>{
          console.log(data);
      }
    );

  }
  getAllProduct(){
    this._data.getAllProduct().subscribe(
      (data:Product[])=>{
        this.products=data;
      }
    );
  }
}
  
  
  


