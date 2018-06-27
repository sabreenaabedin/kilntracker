import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Ceramic } from '../../models/ceramic';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  ceramic: Ceramic;

  public ceramics: Array<Ceramic> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.ceramic = navParams.get('ceramic');

    this.ceramics = [];
    this.ceramics.push({
      id: 1,
      name: 'Wheel thrown bowl',
      description: "made at City Clay in Charlottesville",
      slideshow: ['../assets/imgs/image1', '../assets/imgs/image2']
    });
    this.ceramics.push({
      id: 2,
      name: 'Coffee imprint mug',
      description: "made at City Clay in Charlottesville",
      slideshow: ['../assets/imgs/image1', '../assets/imgs/image2']
    });
    this.ceramics.push({
      id: 3,
      name: 'Windowsill planter',
      description: "made at City Clay in Charlottesville",
      slideshow: ['../assets/imgs/image1', '../assets/imgs/image2']
    });

  }

  itemTapped(event, ceramic) {
    this.navCtrl.push(DetailPage, {
      ceramic: ceramic
    });
  }
}
