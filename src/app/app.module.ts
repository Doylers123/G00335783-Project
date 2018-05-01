import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EightballPage } from '../pages/eightball/eightball';
import { SarcasticPage } from '../pages/sarcastic/sarcastic';
import { NormalPage } from '../pages/normal/normal';

import {IonicStorageModule} from'@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EightballPage,
    SarcasticPage,
    NormalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EightballPage,
    SarcasticPage,
    NormalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
