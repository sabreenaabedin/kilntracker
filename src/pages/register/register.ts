import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private email: string = "";
  private password: string = "";
  private confirmpassword: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {

    // MAKE SURE USER ISN'T ALREADY REGISTERED

    if (this.validPassword() && this.validUsername()) {
      let newPassword: string = this.hashPassword();
      this.http
        .post("http://localhost:3000/register", {
          email: this.email,
          password: newPassword
        })
        .subscribe(
          result => {
            console.log("/user response: " + result);
            this.navCtrl.push(LoginPage);
          },
          error => {
            console.log(error);
            alert("User already exists");
          }
        );

    } else {
      alert("invalid username or password");
    }

  }

  hashPassword(): string {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(this.password, salt);
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
