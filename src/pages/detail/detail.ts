import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ceramic } from '../../models/ceramic';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  ceramic: Ceramic;
  glaze: string;
  location: string;
  slides: Array<string>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afStorage: AngularFireStorage) {
    this.ceramic = this.navParams.get("ceramic");
    this.slides = this.ceramic.slideshow;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  upload(event) {
    if (!event.target.files) return;
    
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    
    this.task.snapshotChanges().subscribe(
      result => {
        result.ref.getDownloadURL().then(dl => {
          this.downloadURL = dl;
          console.log(this.downloadURL);
        }).catch(err => {
          console.log(err);
        });
      }
    )
  }

}
