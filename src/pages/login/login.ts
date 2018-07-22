import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ListPage } from '../list/list';
import { Http } from '@angular/http';
import { User } from '../../models/user';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let foundUser: User;
    if (this.validPassword() && this.validUsername()) {

      this.http
        .get("http://localhost:3000/users/" + this.email)
        .subscribe(
          result => {
            console.log("/user response: " + result);
            foundUser = result.json();

            if (bcrypt.compare(this.password, foundUser.password)) {
              this.navCtrl.setRoot(ListPage);
            } else {
              alert("Login information is incorrect");
            }
          },
          error => {
            console.log(error);
            alert("Login information incorrect");
          }
        );


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
