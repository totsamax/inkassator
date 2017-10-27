import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from '@ionic-native/barcode-scanner';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';


  scanData: {};
  options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner,public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = this.firebaseProvider.getItems();
  }
  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  } 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  scan() {
    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData);
      this.scanData = barcodeData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }
}
