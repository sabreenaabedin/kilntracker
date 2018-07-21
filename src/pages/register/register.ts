import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = new User();
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.firstname = this.firstname;
    this.user.lastname = this.lastname;
    
    if (this.validPassword() && this.validUsername()) {
      this.http
      .post("http://localhost:3000/register", {
        user: this.user
      })
      .subscribe(
          result => {
              console.log("/user response: " + result);
          },
          error => {
              console.log(error);
          }
      );
      this.navCtrl.push(LoginPage);
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
