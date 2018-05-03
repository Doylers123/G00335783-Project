import { Component } from'@angular/core';
import { IonicPage, NavController, NavParams } from'ionic-angular';
import { EightballPage } from '../../pages/eightball/eightball';
import { GamesProvider } from '../../providers/games/games';



@Component({

selector:'page-home',
templateUrl:'home.html',
})
export class HomePage {

home: any[]=[];

constructor(public navCtrl: NavController, public navParams: NavParams,private gp:GamesProvider) {



}
ionViewDidLoad() {
console.log('ionViewDidLoad HomePage');
this.gp.GetGameData().subscribe(data =>
{
    this.home = data.search;
})
}
updateStatus(){
this.navCtrl.push(EightballPage);
}




}



