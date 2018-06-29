import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ListPage } from '../list/list';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
      if (this.validPassword() && this.validUsername()) {
        this.navCtrl.setRoot(ListPage);
      }
  }



  validPassword(): boolean {
    var isValid = false;
    if (!this.password) {
      alert("Please enter a password");
    } else {
      isValid = true;
    }

    return isValid;
  };

  validUsername(): boolean {
    var isValid = false;
    if (!this.email) {
      alert("Please enter an email address");
    } else if (!(this.email.includes("@") && this.email.includes("."))) {
      alert("Please enter a valid email address");
    } else {
      isValid = true;
    }
    return isValid;
  }

  register() {
    this.navCtrl.push(RegisterPage)
  }

  forgotPassword() {
    alert("oops");
  }

}
