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
  email: string;
  password: string;
  confirmpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {

    // MAKE SURE USER ISN'T ALREADY REGISTERED

    this.user.email = this.email;
    this.user.password = this.password;
    
    if (this.validPassword() && this.validUsername()) {
      this.http
      .post("http://localhost:3000/register", {
        user: this.user
      })
      .subscribe(
          result => {
              console.log("/user response: " + result);
              this.navCtrl.push(LoginPage);
          },
          error => {
              console.log(error);
              alert("Something went wrong");
          }
      );

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
