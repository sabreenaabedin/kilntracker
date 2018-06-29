import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Ceramic } from '../../models/ceramic';
import { ListService } from '../../services/ceramic.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  ceramic: Ceramic;

  public ceramics: Array<Ceramic> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public listService: ListService
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.ceramics = this.listService.getAllCeramics();
  }

  itemTapped(event, ceramic) {
    this.navCtrl.push(DetailPage, {
      ceramic: ceramic
    });
  }
}
