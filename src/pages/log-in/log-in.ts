import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { UserMaster } from '../../Model/User';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  user_name:string="";
  password:string="";
  user:UserMaster;
  Product_id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:UserDataProvider) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LogInPage');
  }

  login(id:number,id1:string){

    this.user=new UserMaster(1,this.user_name,this.password,'','',1,'','','','','',null,null);
    //console.log(this.user);
    this._data.login(this.user).subscribe(
    
      (data:UserMaster[])=>{
        console.log(data);
       if(data.length==1){
         console.log("hi");
         localStorage.setItem('User_name',this.user_name);
       }
       this.navCtrl.push(AboutPage);
      }
    );
    
      }
  onClick(id:number){
    this.navCtrl.push(SignUpPage);
  }

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }

}
