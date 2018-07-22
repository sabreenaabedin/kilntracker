import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {
  name: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

  addItem(){
    this.http
        .post("http://localhost:3000/ceramics", {

        })
        .subscribe(
          result => {
            console.log("/ceramics response: " + result);
            this.navCtrl.push(ListPage);
          },
          error => {
            console.log(error);
            alert("Something went wrong");
          }
        );
  }

  save(){
    alert("call post ceramics endpoint");
    this.navCtrl.setRoot(ListPage);
  }

  cancel(){
    this.navCtrl.setRoot(ListPage);
  }

}
