import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ceramic } from '../../models/ceramic';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  ceramic: Ceramic;
  glaze: string;
  location: string;
  slides: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ceramic = this.navParams.get("ceramic");
    this.slides = this.ceramic.slideshow;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
