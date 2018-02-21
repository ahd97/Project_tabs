import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { UserMaster } from '../../Model/User';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { HomePage } from '../home/home';
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
  email:string="";
  password:string="";
  user:UserMaster;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  login(){

   
    this.user=new UserMaster(1,'',this.password,'','',1,this.email,'','','','',null,null);
    //console.log(this.user);
    this._data.login(this.user).subscribe(
    
      (data:UserMaster[])=>{
        console.log(data);
       if(data.length==1){
         console.log("hi");
         localStorage.setItem('Email',this.email);
       }
       this.navCtrl.push(HomePage);
      }
    );
    
      }
  onClick(){
    this.navCtrl.push(SignUpPage);
  }

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }

}
