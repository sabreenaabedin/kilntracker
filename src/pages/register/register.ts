import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var user = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    if (this.validPassword() && this.validUsername()) {
      alert("this should do something eventually");
      this.navCtrl.push(LoginPage)
    }
  }

  validPassword(): boolean {
    var isValid = false;
    if (!(this.password || this.confirmpassword)) {
      alert("Please enter a password");
    } else if (this.password != this.confirmpassword) {
      alert("Make sure your password matches");
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
}
