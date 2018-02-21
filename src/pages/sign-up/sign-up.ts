import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserMaster } from '../../Model/User';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { HomePage } from '../home/home';
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
  public security_q:string;
  public security_a:string;
  public ph_no:number;
  public e_mail:string;
  public first_name:string;
  public last_name:string;
  public address:string;
  public dob:string;
  public role_id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  onAdd() {
    this._data.addUsers(new UserMaster(0, this.user_name,this.password,this.security_q,this.security_a,this.ph_no,this.e_mail,this.first_name,this.last_name,this.address,this.dob,3,"abc")).subscribe(

      (data:any) => {
        this.navCtrl.push(HomePage);
        console.log(data);
      }, function (err) {
        console.log(err);
      },
      function () {

      }
    );
   
  }
}
