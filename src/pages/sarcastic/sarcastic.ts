import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-sarcastic',
  templateUrl: 'sarcastic.html',
})
export class MoviePage {
sarcastic:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private mp:MoviesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SarcasticPage');
    this.mp.GetMovieData().subscribe(data =>
{
    this.sarcastic = data.movies;
})
  }

horrorMovie(){
this.navCtrl.push(MoviePage);
}

}
