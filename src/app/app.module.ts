import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDnG6Ljs0ZfPgftXHt1FoVr42keLEgItuY",
  authDomain: "inkassator-app.firebaseapp.com",
  databaseURL: "https://inkassator-app.firebaseio.com",
  projectId: "inkassator-app",
  storageBucket: "inkassator-app.appspot.com",
  messagingSenderId: "219372283460"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
