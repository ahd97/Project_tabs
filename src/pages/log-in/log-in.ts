import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:UserDataProvider) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LogInPage');
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
    this.user=new UserMaster(1,this.user_name,this.password,'','',1,'','','','','',null,null);
    //console.log(this.user);
    this._data.login(this.user).subscribe(
    
      (data:UserMaster[])=>{
        console.log(data);
       if(data.length==1){
         console.log("hi");
         localStorage.setItem('User_name',this.user_name);
         console.log(this.user);
       }
       this.navCtrl.push(AboutPage);
      }
    );
    
      }
    }
    onSignup(){
    this.navCtrl.push(SignUpPage);
  }

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }

}
