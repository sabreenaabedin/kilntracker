import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Ceramic } from '../../models/ceramic';
import { Http } from '@angular/http';
import { AdditemPage } from '../additem/additem';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  // ceramic: Ceramic;

  public ceramics: Array<Ceramic>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http
  ) {
 
    this.http
    .get("http://localhost:3000/ceramics")
    .subscribe(
        result => {
            console.log("/ceramics response: " + result);
            let list = result.json();
            this.ceramics = list;
        },
        error => {
            console.log(error);
        }
    );
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  itemTapped(event, ceramic) {
    this.navCtrl.push(DetailPage, {
      ceramic: ceramic
    });
  }

  addNewItem(){
    this.navCtrl.push(AdditemPage);
  }
}
