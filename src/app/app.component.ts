import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, Modal } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, modalCtrl: ModalController) {

    this.initializeApp(modalCtrl);

    this.pages = [
      { title: 'List', component: ListPage },
      { title: 'Settings', component: SettingsPage},
      { title: 'Log Out', component: LoginPage }
    ];

  }

  initializeApp(modalCtrl: ModalController) {
    this.platform.ready().then(() => {
      let splash = modalCtrl.create(SplashPage);
      splash.present();
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
