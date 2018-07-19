import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ceramic } from '../../models/ceramic';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
//import '~bootstrap/dist/css/bootstrap.min.css';
import { map } from 'rxjs/operators/map';

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
  downloadURL: string;
  uploadProgress: Observable<number>;
  uploadState: Observable<string>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private afStorage: AngularFireStorage) {
    this.ceramic = this.navParams.get("ceramic");
    this.slides = this.ceramic.slideshow;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  getURL() {
    // this.ref.getDownloadURL().then(dl => { this.downloadURL = dl;});
    this.task.snapshotChanges().subscribe(
      result => {
        result.ref.getDownloadURL().then(dl => {
          this.downloadURL = dl;
          console.log(this.downloadURL);
        });
      })
      alert( "url? " + this.downloadURL);
    }

  upload(event) {
    if (!event.target.files) return;

    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
  }
}
