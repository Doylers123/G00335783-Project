import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sarcastic',
  templateUrl: 'sarcastic.html',
})
export class MoviePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SarcasticPage');
  }

horrorMovie(){
this.navCtrl.push(MoviePage);
}

}
