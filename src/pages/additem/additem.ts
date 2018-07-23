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
  id: number;
  tracking: string;
  glaze: string;
  weight: number;
  height: number;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

  save(){
    this.http
        .post("http://localhost:3000/ceramics", {
            id: this.id,
            name: this.name,
            tracking: this.tracking,
            glaze: this.glaze,
            weight: this.weight,
            height: this.height,
            description: this.description,
            photo: ""
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
    this.navCtrl.setRoot(ListPage);
  }

  cancel(){
    this.navCtrl.setRoot(ListPage);
  }

}
