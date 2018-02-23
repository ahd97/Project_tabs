import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UserMaster } from '../../Model/User';
import { Cart } from '../../Model/Cart';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { CartDataProvider } from '../../providers/cart-data/cart-data';
import { Cart_detail } from '../../Model/Cart_detail';
import { CartDetailDataProvider } from '../../providers/cart-detail-data/cart-detail-data';
import { Product } from '../../Model/Product';
import { AboutPage } from '../about/about';
import { LogInPage } from '../log-in/log-in';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  public user_id:number;
  public user_name:string;
  public password:string;
  public ph_no:number;
  public e_mail:string;
  public first_name:string;
  public last_name:string;
  public address:string;
  public dob:string;
  public role_id:number;
  public Product_id:number;
  public cart_id:number;
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:UserDataProvider,public _data1:CartDataProvider,public _cartdetail:CartDetailDataProvider) {
  }

  ionViewDidLoad() {
  
    
    console.log('ionViewDidLoad SignUpPage');
  }
  onAdd(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
    this._data.addUsers(new UserMaster(0, this.user_name,this.password,this.ph_no,this.e_mail,this.first_name,this.last_name,this.address,this.dob,3,"abc")).subscribe(

      (data:any) => {
        console.log(data);
        localStorage.setItem('User_name',this.user_name);
        // console.log(localStorage.getItem('User_name'));
        
      }, function (err) {
        console.log(err);
      },
      function () {

      }
    );
   this._data1.addCart(new Cart(0,this.user_name)).subscribe(
     (data:any)=>{
       console.log(data);
     },function(err){
       console.log(err);
     },
     function(){

     }
   );
   this.navCtrl.push(LogInPage);
  }
}
}
