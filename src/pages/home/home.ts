import { Component } from'@angular/core';
import { IonicPage, NavController, NavParams } from'ionic-angular';
import { EightballPage } from '../../pages/eightball/eightball';



@Component({

selector:'page-home',
templateUrl:'home.html',
})
export class HomePage {

myChoice: string;

constructor(public navCtrl: NavController, public navParams: NavParams) {



}
ionViewDidLoad() {
console.log('ionViewDidLoad HomePage');
}
updateStatus(){
this.navCtrl.push(EightballPage);
}




}



